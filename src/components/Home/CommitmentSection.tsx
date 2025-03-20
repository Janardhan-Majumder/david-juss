import React from "react";
import Container from "../Container";
import { RiDoubleQuotesR } from "react-icons/ri";
import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";

const CommitmentSection = () => {
  return (
    <Container
      parentClass="bg-playground py-5"
      className="space-y-12 lg:space-y-20"
    >
      <div className="flex flex-col-reverse md:flex-row justify-center items-center md:items-end">
        <div className="bg-background rounded-xl pl-5 p-8 flex gap-2 max-w-xs md:max-w-md lg:max-w-xl h-fit mb-6 shadow md:-mr-44 -mt-10 md:-mt-0 z-0">
          <RiDoubleQuotesR
            size={30}
            className="min-w-10 text-slate-400 scale-x-[-1.5]"
          />
          <p className="pt-2.5 text-lg md:text-xl lg:text-2xl font-medium">
            Excellent service! The team was punctual, thorough, and left my home
            sparkling clean. Highly recommend for anyone needing a reliable and
            detailed cleaning service.
          </p>
        </div>
        <div className="">
          <Image
            alt={"Service"}
            src={"/images/service-image.png"}
            height={1000}
            width={1000}
            className="w-full shadow max-w-3xl"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
        <div className="p-8 bg-primary space-y-5 h-full align-bottom flex flex-col justify-end">
          <SectionHeading text="Our Commitment" className="text-start" />
          <p>
            At KV-tarif24.de, we are committed to providing exceptional service
            that puts your needs first. Whether you&lsquo;re looking to save on your
            premiums or better understand your insurance options, we are here to
            guide you every step of the way.
          </p>
        </div>
        <div className="h-full">
          <Image
            alt={"Service"}
            src={"/images/commitment.png"}
            height={1000}
            width={1000}
            className="w-full h-full"
          />
        </div>
      </div>
    </Container>
  );
};

export default CommitmentSection;
