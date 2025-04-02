"use client";
// @ts-nocheck
import React, { useState } from "react";
import Container from "../Container";
import { Button, Col, Form, Input, Modal, Radio, Row } from "antd";
import Image from "next/image";
// import TextAnimation from "../ui/TextAnimation";
import { useRouter } from "next/navigation";
// import { span } from "motion/react-client";
import { errorAlert, successAlert } from "@/lib/alert";
// const { useBreakpoint } = Grid;
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const Header = () => {
  // const screens = useBreakpoint();
  const router = useRouter();
  const [notOptimizable, setNotOptimizable] = useState(false);
  const [loading, setLoading] = useState(false);

  // const onChange: DatePickerProps["onChange"] = (date, dateString:any) => {
  //   console.log(dateString);
  //   setDate(dateString);
  // };
  const onFinish = async (values: any) => {
    setLoading(true);
    const value1 = { ...values, [values.Profession]: true };
    const { ...finalData } = value1;

    try {
      if (!apiBaseUrl) {
        errorAlert({
          error: { message: "API base URL is not set in .env.local" },
        });
        return;
      }
      const response: any = await fetch(`${apiBaseUrl}/submit-terif/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });
      const addData = await response.json();
      // console.log(addData);
      if (addData.success) {
        successAlert({ message: addData?.message });
        router.push(`optimizable?email=${values?.email}`);
      } else if (addData.status === 401) {
        setNotOptimizable(true);
      } else {
        errorAlert({ error: addData });
      }
    } catch (error: any) {
      errorAlert({ error });
    } finally {
      setLoading(false);
    }
  };
  // const handleClose = () => setNotOptimizable(false);
  // console.log(screens);
  // const headingText =
  //   "FIND THE RIGHT PROVIDER TO REDUCE YOUR EXISTING HEALTH INSURANCE PREMIUM WITH THE SAME BENEFITS, WITHOUT OBLIGATION";
  // console.log(screens);
  return (
    <div className="pb-8 relative">
      <Image
        src="/bgs/paint-brush1.png"
        alt="hero"
        className="-z-10 absolute object-center object-cover"
        fill
        sizes="100vw"
      />
      <Container className="space-y-10 xl:space-y-14">
        <h2 className="text-2xl text-center text-white font-roboto font-semibold leading-normal lg:leading-normal lg:text-5xl max-w-6xl md:leading-normal md:text-3xl mx-auto">
          FIND THE RIGHT PROVIDER TO REDUCE YOUR EXISTING HEALTH INSURANCE
          PREMIUM WITH THE SAME BENEFITS, WITHOUT OBLIGATION
        </h2>
        <div className="bg-[#3c5267c5] border border-yellow-400 p-6 rounded-lg max-w-4xl mx-auto xl:p-10">
          <Form
            layout="vertical"
            onFinish={onFinish}
            style={{ marginTop: 20 }}
            requiredMark={false}
          >
            <Row gutter={[28, 16]}>
              {/* Left Column */}
              <Col xs={24} lg={12}>
                <Row gutter={[16, 16]}>
                  <Col xs={24}>
                    <Form.Item
                      name="title"
                      rules={[
                        { required: true, message: "Please input your title!" },
                      ]}
                    >
                      <Input size="large" placeholder="Title" />
                    </Form.Item>
                  </Col>
                  <Col xs={24}>
                    <Form.Item
                      name="name"
                      rules={[
                        { required: true, message: "Please input your name!" },
                      ]}
                    >
                      <Input size="large" placeholder="Name" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={24}>
                    <Form.Item
                      name="Profession"
                      label={
                        <span className="text-xl text-white font-bold">
                          Profession
                        </span>
                      }
                      rules={[
                        {
                          required: true,
                          message: "Please select your profession!",
                        },
                      ]}
                    >
                      <Radio.Group>
                        <Radio value="isSelfEmployed">
                          <span className="text-white font-medium">
                            Self Employed
                          </span>
                        </Radio>
                        <Radio value="isEmployed">
                          <span className="text-white font-medium">Employee</span>
                        </Radio>
                        <Radio value="isRetired">
                          <span className="text-white font-medium">Retired</span>
                        </Radio>
                      </Radio.Group>
                    </Form.Item>
                  </Col>
                </Row>
              </Col>

              {/* Right Column */}
              <Col xs={24} lg={12}>
                <Row gutter={[16, 16]}>
                  <Col xs={24}>
                    <Form.Item
                      name="insurance"
                      rules={[
                        {
                          required: true,
                          message: "Please input your current insurance!",
                        },
                      ]}
                    >
                      <Input size="large" placeholder="Current Insurance" />
                    </Form.Item>
                  </Col>
                  <Col xs={24}>
                    <Form.Item
                      name="terif"
                      rules={[
                        {
                          required: true,
                          message: "Please input the name of the tariff!",
                        },
                      ]}
                    >
                      <Input size="large" placeholder="Name of the tariff" />
                    </Form.Item>
                  </Col>
                  <Col xs={12}>
                    <Form.Item
                      name="monthlyPremium"
                      rules={[
                        {
                          required: true,
                          message: "Please input your monthly premium!",
                        },
                      ]}
                    >
                      <Input size="large" placeholder="Monthly Premium" />
                    </Form.Item>
                  </Col>
                  <Col xs={12}>
                    <Form.Item
                      name="deductible"
                      rules={[
                        {
                          required: true,
                          message: "Please input your deductible!",
                        },
                      ]}
                    >
                      <Input size="large" placeholder="Deductible" />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>

              {/* Profession Selection */}

              {/* Submit Button */}
              <Col span={24} className="text-center">
                <Button
                  loading={loading}
                  type="primary"
                  htmlType="submit"
                  size="large"
                  className="w-full font-bold max-w-96"
                >
                  CHECK YOUR TARIFF
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
      <Modal
        title={
          <h1 className="text-2xl text-center text-heading w-full lg:text-4xl mt-3">
            Thank you for your request.
          </h1>
        }
        centered
        open={notOptimizable}
        footer={null}
        closeIcon={null}
        style={{
          maxWidth: "900px",
        }}
        width={"90%"}
      >
        <div className="text-center lg:px-10 pb-5 pt-7 space-y-4">
          <p className="text-xl font-medium md:text-2xl">
            Unfortunately, you are already in the most cost-effective plan for
            you, and optimization is not possible in your case.
          </p>
          <p className="text-2xl text-hash font-medium md:text-2xl">
            Nevertheless, we appreciate your time and wish you all the best.
          </p>
          <p>
            <span className="text-hash">Your</span>
            <br />
            <span className="text-lg font-medium md:text-xl">
              kv-tarif24 Team
            </span>
          </p>
          <div className="flex justify-center pt-5">
            <Button
              type="primary"
              size="large"
              className="w-full lg:max-w-md max-w-xs"
              onClick={() => setNotOptimizable(false)}
            >
              OK
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
