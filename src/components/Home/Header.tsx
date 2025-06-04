"use client";
// @ts-nocheck
import React, { useState } from "react";
import Container from "../Container";
import { Button, Col, Form, Input, Modal, Radio, Row, Select } from "antd";
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
      <Container className="space-y-10 xl:space-y-12">
        <h2 className="text-center text-white font-roboto font-medium leading-normal lg:leading-normal text-xl md:text-2xl lg:text-4xl max-w-6xl md:leading-normal mx-auto">
          <span className="font-semibold">
            Sparen Sie dauerhaft Beiträge – ohne Ihre Versicherung zu wechseln
          </span>
          . Füllen Sie das kurze Formular aus und erhalten Sie{" "}
          <span className="font-semibold">
            ein kostenloses, unverbindliches Angebot zur Optimierung Ihrer
            privaten Krankenversicherung
          </span>{" "}
          – individuell, diskret und sicher.
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
                        { required: true, message: "Title ist erforderlich!" },
                      ]}
                    >
                      <Select
                        size="large"
                        placeholder="Title"
                        options={[
                          { value: "Dr.", label: "Dr." },
                          { value: "Prof.", label: "Prof." },
                          { value: "Prof. Dr.", label: "Prof. Dr." },
                        ]}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24}>
                    <Form.Item
                      name="salutation"
                      rules={[
                        { required: true, message: "Anrede ist erforderlich!" },
                      ]}
                    >
                      <Select
                        size="large"
                        placeholder="Anrede"
                        options={[
                          { value: "Frau", label: "Frau" },
                          { value: "Herr", label: "Herr" },
                        ]}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24}>
                    <Form.Item
                      name="name"
                      rules={[
                        { required: true, message: "Name ist erforderlich!" },
                      ]}
                    >
                      <Input size="large" placeholder="Vollständiger Name" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={24}>
                    <Form.Item
                      name="Profession"
                      label={
                        <span className="text-xl text-white font-bold">
                          Beruf :
                        </span>
                      }
                      rules={[
                        {
                          required: true,
                          message: "Beruf ist erforderlich!",
                        },
                      ]}
                    >
                      <Radio.Group>
                        <Radio value="isSelfEmployed">
                          <span className="text-white font-medium">
                            Selbstständig
                          </span>
                        </Radio>
                        <Radio value="isEmployed">
                          <span className="text-white font-medium">
                            Angestellter
                          </span>
                        </Radio>
                        <Radio value="isRetired">
                          <span className="text-white font-medium">
                            Rentner
                          </span>
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
                          message: "Insurance company ist erforderlich!",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder="Versicherungsgesellschaft"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24}>
                    <Form.Item
                      name="terif"
                      rules={[
                        {
                          required: true,
                          message: "Name Ihres Tarifes ist erforderlich!",
                        },
                      ]}
                    >
                      <Input size="large" placeholder="Name Ihres Tarifes" />
                    </Form.Item>
                  </Col>
                  <Col xs={12}>
                    <Form.Item
                      name="monthlyPremium"
                      rules={[
                        {
                          required: true,
                          message: "Monatlicher Beitrag ist erforderlich!",
                        },
                      ]}
                    >
                      <Input size="large" placeholder="Monatlicher Beitrag" />
                    </Form.Item>
                  </Col>
                  <Col xs={12}>
                    <Form.Item
                      name="deductible"
                      rules={[
                        {
                          required: true,
                          message: "Selbstbeteiligung ist erforderlich!",
                        },
                      ]}
                    >
                      <Input size="large" placeholder="Selbstbeteiligung" />
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
                  {"Jetzt unverbindlich prüfen".toUpperCase()}
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
      <Modal
        // title={
        //   <h1 className="text-2xl text-center text-heading w-full lg:text-4xl mt-3">
        //     Thank you for your request.
        //   </h1>
        // }
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
          <div className="md:text-lg">
            <span className="font-medium">
              Leider ist für Ihren aktuellen Tarif keine Optimierung möglich
            </span>
            <p className="text-xl md:text-2xl py-2">
              Vielen Dank für Ihre Anfrage und das Vertrauen in kv-tarif24.de.
            </p>
            Nach Auswertung Ihrer Angaben müssen wir Ihnen mitteilen, dass{" "}
            <span className="font-medium">
              eine Optimierung Ihres aktuellen PKV-Tarifs derzeit leider nicht
              möglich ist
            </span>
            . Dies betrifft insbesondere bestimmte{" "}
            <span className="font-medium">Standard- oder Basistarife</span>, die
            gesetzlich reguliert sind und keine internen Tarifalternativen
            zulassen. <br /> Bitte seien Sie versichert: Wir prüfen jede Anfrage
            sorgfältig und geben{" "}
            <span className="font-medium">
              nur dann ein Optimierungsangebot ab, wenn eine tatsächliche
              Ersparnis ohne Leistungsverlust realistisch und sinnvoll ist
            </span>
            . Sollte sich Ihre Tariflage in Zukunft ändern, freuen wir uns, wenn
            Sie erneut auf uns zukommen. Gerne halten wir Sie auch auf dem
            Laufenden –{" "}
            <span className="font-medium">
              tragen Sie sich einfach in unseren Info-Service ein
            </span>
            .
          </div>
          <p>
            <span className="text-hash">
              Vielen Dank und weiterhin alles Gute!
            </span>
            <br />
            <span className="md:text-lg font-medium">
              Ihr Team von kv-tarif24.de
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
