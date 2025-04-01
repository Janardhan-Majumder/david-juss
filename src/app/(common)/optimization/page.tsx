"use client";
import React, { use, useEffect, useRef, useState } from "react";
import Container from "@/components/Container";
import Advertise from "@/components/Home/Advertise";
import { Button, Form, Input } from "antd";
import Image from "next/image";
import SignatureCanvas, { SignatureRef } from "@uiw/react-signature";
import html2canvas from "html2canvas";
import { errorAlert, successAlert, TResError } from "@/lib/alert";
import { TPageProps } from "@/types/common.type";
import { fetchGetApi } from "@/lib/api";
import { renderPDF } from "@/components/pdf/PdfDocument";
import { useRouter } from "next/navigation";
interface FormValues {
  insuranceNumber: string;
  phone: string;
  ZIPCodePlace: string;
  StreetHouseNumber: string;
}
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const Page = (props: TPageProps) => {
  const [form] = Form.useForm();
  const router = useRouter();
  const { email } = use(props.searchParams);
  const [infoLoading, setInfoLoading] = useState(true);
  const [muLoading, setMuLoading] = useState(false);
  const captureRef = useRef<HTMLDivElement | null>(null);
  const signatureRef = useRef<SignatureRef | null>(null);
  const [insuranceData, setInsuranceData] = useState<{
    [key: string]: any;
  } | null>(null);
  const [points, setPoints] = useState<number[][]>([]);

  const captureFunc = async () => {
    if (!captureRef.current) return null;
    const canvas = await html2canvas(captureRef.current);
    const dataUrl = canvas.toDataURL("image/png");
    const [header, base64] = dataUrl.split(",");
    const mime = header.match(/:(.*?);/)?.[1] || "image/png";
    const u8arr = new Uint8Array(
      atob(base64)
        .split("")
        .map((char) => char.charCodeAt(0))
    );
    return {
      dataUrl,
      file: new File([new Blob([u8arr], { type: mime })], "signature.png", {
        type: mime,
      }),
    };
  };

  const handleClear = () => {
    signatureRef.current?.clear();
    form.resetFields();
    // setSignatureData(null);
    setPoints([]);
  };

  const handlePoints = (data: number[][]) => {
    if (data.length > 0) {
      setPoints([...points, ...data]);
    }
  };
  const PDFInfo = {
    fullName: "John Doe",
    profession: "Software Engineer",
    street: "123 Main St",
    houseNumber: "45B",
    healthInsuranceCompany: "HealthCare Inc.",
    postalCode: "12345",
    city: "New York",
    tariffs: "Basic Plan",
    dateOfBirth: "1990-05-15",
    insuranceNumber: "HCI123456789", // Replace with actual signature image URL
  };
  const onFinish = async (values: FormValues): Promise<void> => {
    setMuLoading(true);
    try {
      if (points.length < 1) {
        throw new Error("Signature is required!");
      }
      const signatureResult = await captureFunc();
      if (signatureResult?.dataUrl && insuranceData) {
        const padfResult = await renderPDF({
          PDFInfo: { ...PDFInfo, signature: signatureResult?.dataUrl },
        });
        // console.log(padfResult.blob, URL.createObjectURL(padfResult.blob));
        const formData = new FormData();
        const payload = {
          name: insuranceData?.name,
          email: insuranceData?.email,
          pdf: padfResult.file, // will be pdf
          signature: signatureResult.file, // will be pdf
          ...values,
        };
        for (const key in payload) {
          const element = payload[key];
          formData.append(key, element);
        }
        // console.log(URL.createObjectURL(formData.get("signature") as File))
        const res = await fetch(apiBaseUrl + `/submit-information/add`, {
          method: "POST",
          body: formData, // No need to set Content-Type manually
        });
        const data = await res.json();
        if (!data?.success) {
          errorAlert({ error: data as TResError });
        } else {
          successAlert({ message: "Successfully Submited!" });
          handleClear();
          router.push("/");
        }
      } else {
        throw new Error("Incomplete payload!");
      }
    } catch (error) {
      console.log(error);
      errorAlert({ error: error as TResError });
    } finally {
      setMuLoading(false);
    }
  };

  useEffect(() => {
    const fetchfunc = async () => {
      try {
        const res = await fetchGetApi(`/submit-terif/details?email=${email}`);
        setInsuranceData(res?.data);
      } catch (error) {
        errorAlert({ error: error as TResError });
      } finally {
        setInfoLoading(false);
      }
    };
    fetchfunc();
  }, [email]);
  const benefitsList = [
    {
      text: "The verification is 100% free and non-binding for you.",
      icon: "check-icon.svg",
    },
    {
      text: "Your data is 100% protected.",
      icon: "check-icon.svg",
    },
    {
      text: "Within a few days, you will receive a tailor-made offer that you can discuss free of charge with an expert.",
      icon: "check-icon.svg",
    },
  ];
  if (infoLoading) {
    return (
      <div className=" h-[80vh] flex justify-center items-center  ">
        Loading...
      </div>
    );
  }
  return (
    <>
      <header className="relative">
        <Image
          src="/bgs/paint-brush1.png"
          alt="hero"
          className="absolute -z-10 object-cover object-center"
          fill
          sizes="100vw"
        />
        <Container
          parentClass="lg:py-2"
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center max-w-5xl"
        >
          <div className="">
            <div>
              <Image
                alt="free"
                src={"/images/100free.png"}
                width={500}
                height={500}
                className="max-w-32 lg:max-w-36"
              />
            </div>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-white leading-normal lg:leading-normal">
              Don&lsquo;t miss out on potential savings! Complete your details
              now and take control of your insurance costs.
            </p>
            <div className="space-y-4 pt-5">
              {benefitsList.map((item, indx) => (
                <div key={indx} className="flex gap-3">
                  <Image
                    alt="free"
                    src={"/images/check.png"}
                    width={500}
                    height={500}
                    className="max-w-8 lg:max-w-10 h-fit"
                  />
                  <p className="text-white lg:text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full mx-auto bg-[#3c5267c5] p-6 xl:p-10 rounded-lg border border-yellow-400">
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              requiredMark={false}
            >
              {/* <Form.Item name="birth_date" rules={[{ required: true }]}>
                <DatePicker
                  size="large"
                  placeholder="Date of birth"
                  className="w-full"
                  style={{ borderRadius: "2px" }}
                />
              </Form.Item> */}

              <Form.Item
                name="insuranceNumber"
                rules={[
                  {
                    required: true,
                    message: "Please enter insurance number!",
                  },
                ]}
              >
                <Input size="large" placeholder="Insurance Number" />
              </Form.Item>

              <Form.Item name="phone" rules={[{ required: true }]}>
                <Input size="large" placeholder="Phone" />
              </Form.Item>
              <Form.Item name="ZIPCodePlace" rules={[{ required: true }]}>
                <Input size="large" placeholder="ZIP Code Place" />
              </Form.Item>
              <Form.Item name="StreetHouseNumber" rules={[{ required: true }]}>
                <Input size="large" placeholder="Street House Number" />
              </Form.Item>
              <Form.Item
                label={
                  <span className="text-white text-base lg:text-lg">
                    Create signature
                  </span>
                }
                // name={"signature"}
                // rules={[{ required: true, message: "Signature is required!" }]}
              >
                <div ref={captureRef}>
                  <SignatureCanvas
                    ref={signatureRef}
                    onPointer={handlePoints}
                  />
                </div>
              </Form.Item>
              <div className="flex justify-end pb-2">
                <button
                  type="button"
                  onClick={handleClear}
                  className="bg-playground active:bg-green-300 py-1 px-6 rounded-sm font-medium text-slate-500 active:text-red-500 transition-all"
                >
                  Clear
                </button>
              </div>
              <Button
                loading={muLoading}
                type="primary"
                htmlType="submit"
                size="large"
                className="font-bold w-full"
              >
                SUBMIT
              </Button>
            </Form>
          </div>
        </Container>
      </header>
      <div className="bg-primary h-3 lg:h-4 w-full" />
      <Advertise className="bg-playground" />
    </>
  );
};

export default Page;
