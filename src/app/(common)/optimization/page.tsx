"use client";
// @ts-nocheck
import React, { useRef } from "react";
import Container from "@/components/Container";
import Advertise from "@/components/Home/Advertise";
import { Button, DatePicker, Form, Input } from "antd";
import Image from "next/image";
import Signature, { SignatureRef } from "@uiw/react-signature";

const Page = () => {
  const $svg = useRef<SignatureRef>(null);
  const handle = () => {
    $svg.current?.clear();
  };
  const onFinish = (values: any) => {
    console.log("Form values:", values);
  };
  // const text = "Congratulations";
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
              Don&lsquo;t miss out on potential savings! Complete your details now and
              take control of your insurance costs.
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
            {/* <h2 className="text-white text-center text-xl font-bold mb-4">
            WITHOUT OBLIGATION
          </h2> */}
            <Form
              layout="vertical"
              onFinish={onFinish}
              //   style={{ marginTop: 20 }}
            >
              <Form.Item name="birth_date" rules={[{ required: true }]}>
                <DatePicker
                  size="large"
                  placeholder="Date of birth"
                  className="w-full"
                  style={{ borderRadius: "2px" }}
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Email is required!" },
                  { type: "email", message: "Valid email is required!" },
                ]}
              >
                <Input size="large" placeholder="Emial" />
              </Form.Item>

              <Form.Item name="phone" rules={[{ required: true }]}>
                <Input size="large" placeholder="Phone" />
              </Form.Item>
              <Form.Item
                label={
                  <span className="text-white text-base lg:text-lg">
                    Create signature
                  </span>
                }
              >
                <Signature ref={$svg} />
              </Form.Item>
              <div className="flex justify-end pb-2">
                <button
                  type="button"
                  onClick={handle}
                  className="bg-playground active:bg-green-300 py-1 px-6 rounded-sm font-medium text-slate-500 active:text-red-500 transition-all"
                >
                  Clear
                </button>
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
