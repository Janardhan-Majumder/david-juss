"use client";
import React, { useRef, useEffect, useState, use } from "react";
import Container from "@/components/Container";
import Advertise from "@/components/Home/Advertise";
import { Button, DatePicker, DatePickerProps, Form, Input } from "antd";
import Image from "next/image";
import SignatureCanvas from "@uiw/react-signature";

type Params = Promise<{ id: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export type TPageProps = { params: Params; searchParams: SearchParams };

const Page = (props: TPageProps) => {
  const $svg = useRef<SignatureCanvas | null>(null); 
  const [date, setDate] = useState(null);
  const { email } = use(props.searchParams);
  console.log(email, date);

  const onChange: DatePickerProps["onChange"] = (date, dateString: any) => {
    console.log(dateString);
    setDate(dateString);
  };

  // Function to download the signature
  const handleDownload = () => {
    if ($svg.current) {
      const dataUrl = $svg.current.getSignatureDataUrl(); // Get the signature image URL
      const link = document.createElement("a");
      link.href = dataUrl; // Set the data URL as the link href
      link.download = "signature.png"; // Specify the filename for download
      link.click(); // Trigger the download
    }
  };

  const handle = () => {
    $svg.current?.clear();
  };

  const onFinish = (values: any) => {
    console.log("Form values:", values);
  }; // Only prints if email is available

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
            <Form layout="vertical" onFinish={onFinish}>
              {/* <Form.Item name="birth_date" rules={[{ required: true }]}>
                <DatePicker
                  size="large"
                  placeholder="Date of birth"
                  className="w-full"
                  style={{ borderRadius: "2px" }}
                />
              </Form.Item> */}

              <Form.Item
                name="dateOfBirth"
                rules={[
                  {
                    required: true,
                    message: "Please select your date of birth!",
                  },
                ]}
              >
                <DatePicker
                  onChange={onChange}
                  size="large"
                  style={{ width: "100%" }}
                  type=""
                  placeholder="Date Of Birth"
                  disabledDate={(current) =>
                    current && current.isAfter(new Date())
                  }
                />
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
              >
                <SignatureCanvas ref={$svg} />
              </Form.Item>
              <div className="flex justify-end pb-2">
                <button
                  type="button"
                  onClick={handle}
                  className="bg-playground active:bg-green-300 py-1 px-6 rounded-sm font-medium text-slate-500 active:text-red-500 transition-all"
                >
                  Clear
                </button>
                <button onClick={handleDownload}>Download Signature</button>
              </div>
              <Button
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
