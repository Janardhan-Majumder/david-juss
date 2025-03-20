import Container from "@/components/Container";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="relative min-h-[45vh] md:min-h-[40vh]">
        <Image
          src="/images/about.png"
          alt="hero"
          className="absolute -z-10 object-cover object-center"
          fill
          // width={1000}
          // height={1000}
          sizes="100vw"
        />
        <Container className="">
          <div className="space-y-2 xl:space-y-3 max-w-[92%] sm:max-w-xl lg:max-w-2xl mx-auto text-heading bg-white p-6 rounded-xl absolute top-[45%] sm:top-[55%] lg:left-[5%] 2xl:top-[70%] z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-poppins leading-normal lg:leading-normal">
              About Us
            </h2>
            <p className="text-sm lg:text-base">
              KV-tarif24 is a digital platform that helps private health
              insurance policyholders reduce their premiums without changing
              providers or losing benefits. We connect you with experts who
              optimize your tariff, ensuring savings while maintaining your
              coverage.
            </p>
          </div>
        </Container>
      </div>
      <div className="bg-heading [clip-path:polygon(100%_0,100%_85%,50%_100%,0_85%,0_0,50%_0)] lg:[clip-path:polygon(100%_0,100%_75%,50%_100%,0_75%,0_0,50%_0)]">
        <Container parentClass="pb-16 lg:pb-12 pt-20 md:pt-16" className="">
          <div className="space-y-5 w-full lg:max-w-2xl mx-auto text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-semibold font-poppins leading-normal lg:leading-normal">
              Who we are?
            </h2>
            <p className="px-4 lg:px-0">
              At KV-tarif24.de, we are dedicated to simplifying the complexities
              of private health insurance optimization in Germany. Our platform
              is designed for private health insurance policyholders,
              particularly entrepreneurs and middle-to-upper-class individuals
              aged 40-70. We specialize in reducing your monthly premiums while
              ensuring you retain all your benefits and age reserves. <br />
              Our mission is to provide a seamless and transparent service that
              helps you save money on your insurance without compromising your
              coverage. By acting as a neutral intermediary between you and your
              insurance provider, we ensure you get the best possible offer with
              no hidden fees.
            </p>
          </div>
        </Container>
      </div>
      <Container parentClass="py-10" className="space-y-7">
        <div className="space-y-5 w-full lg:max-w-2xl mx-auto text-center text-heading">
          <h2 className="text-4xl lg:text-5xl font-semibold font-poppins leading-normal lg:leading-normal">
            What We Do
          </h2>
          <p className="">
            We take the stress out of insurance optimization. From the moment
            you submit your request, our fully digitized platform handles
            everything—from evaluating your policy&apos;s potential for optimization
            to delivering personalized offers and guiding you through the
            process. Heres how we make it simple:
            <br /> <br />
            Free Consultation: Submit your details, and we&apos;ll evaluate your
            insurance tariff for free.
            <br />
            <br />
            Tailored Offers: Receive customized optimization proposals prepared
            by our trusted partners.
            <br />
            <br />
            Effortless Process: Accept the offer, and we&apos;ll take care of the
            rest, ensuring your savings are implemented quickly and efficiently.
          </p>
          <div className="pt-10">
            <Image
              alt="free"
              src={"/images/about-2ndimg.png"}
              width={1000}
              height={1000}
              className="w-full"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default page;
