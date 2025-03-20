"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { createElement } from "react";
import Container from "@/components/Container";
import { PiMinusFill, PiPlusFill } from "react-icons/pi";

const Page = () => {
  const [show, setShow] = React.useState<null | number>(1);
  const faqs = [
    {
      id: 1,
      question: "What is KV-tarif24?",
      answer:
        "KV-tarif24 is an online platform that helps individuals optimize their private health insurance plans in Germany. By analyzing your current tariff and comparing it with other available options within your insurance provider, KV-tarif24 can help you save money while maintaining the same level of coverage.",
    },
    {
      id: 2,
      question: "How does the process work?",
      answer:
        "The process is simple and consists of a few steps: First, you provide details about your current private health insurance plan. Then, KV-tarif24's system analyzes whether you are eligible for a better tariff within your existing insurance provider. If a better tariff is available, KV-tarif24 will guide you through the process of switching, ensuring a smooth and hassle-free transition.",
    },
    {
      id: 3,
      question: "Is it free to use KV-tarif24?",
      answer:
        "Yes, using KV-tarif24 to check for better tariffs is completely free. You only pay a fee if you successfully switch to a more cost-effective plan and save money. This means there is no financial risk in using the service—if no savings are found, you pay nothing.",
    },
    {
      id: 4,
      question: "Do I have to switch insurance providers?",
      answer:
        "No, you do not need to change your insurance provider. KV-tarif24 focuses on optimizing your existing health insurance by finding better tariffs within your current provider’s options. This way, you can reduce your costs while keeping the same insurer and avoiding any disruption in coverage.",
    },
    {
      id: 5,
      question: "How do I know if my tariff is optimizable?",
      answer:
        "KV-tarif24 will analyze your current health insurance plan based on various factors such as age, medical history, and contract terms. If there are alternative tariffs within your insurance provider that offer the same or better coverage at a lower price, you will be informed of these options. The platform ensures full transparency so you can make an informed decision about optimizing your plan.",
    },
  ];
  return (
    <div>
      <div className="relative min-h-[45vh] md:min-h-[40vh]">
        <Image
          src="/bgs/faq-bg.png"
          alt="hero"
          className="absolute -z-10 object-cover object-center"
          fill
          // width={1000}
          // height={1000}
          sizes="100vw"
        />
      </div>
      <Container parentClass="bg-[#EFEFEF] lg:px-8 pt-0 pb-20 lg:pb-24 relative">
        <div className="max-w-6xl mx-auto bg-background rounded-2xl shadow-md space-y-8 px-[5%] pt-16 pb-20 -mt-40">
          <h2 className="text-4xl lg:text-5xl font-bold font-roboto leading-normal lg:leading-normal text-center">
            FREQUENTLY ASKED QUESTION
          </h2>
          <div className="flex flex-col space-y-5">
            {faqs.map((faq, index) => (
              <div
                onClick={() => setShow(faq.id)}
                key={index}
                className="p-4 lg:px-8 lg:py-5 rounded-lg space-y-4 bg-[#E9F9F6] transition-all cursor-pointer"
              >
                <div className="flex justify-between items-center gap-2">
                  <h3 className=" md:text-lg font-semibold font-poppins text-heading">
                    {faq.question}
                  </h3>
                  <button className="text-primary">
                    {createElement(show === faq.id ? PiMinusFill : PiPlusFill, {
                      className: "",
                      size: 22,
                    })}
                  </button>
                </div>
                <p
                  className={cn("text-sm lg:text-base text-hash", {
                    hidden: show !== faq.id,
                  })}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
