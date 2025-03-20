import React from "react";
import Container from "../Container";
import Image from "next/image";

const DetailsSection = () => {
  return (
    <Container
      parentClass="bg-playground py-10"
      className="flex flex-col md:flex-row-reverse items-center md:items-start justify-center gap-10 xl:gap-14"
    >
      <div className="w-full max-w-xs sm:max-w-sm xl:max-w-md">
        <Image
          alt="oldest"
          src={"/images/oldest-man.png"}
          height={1000}
          width={1000}
          className="w-full"
        />
      </div>
      <div className="space-y-5 w-full lg:max-w-2xl">
        <h2 className="text-3xl lg:text-5xl font-semibold text-heading font-poppins leading-normal lg:leading-normal">
          Optimize Your Insurance with Ease
        </h2>
        <p className="text-hash">
          Our platform is designed to help you optimize your insurance premiums
          effortlessly while maintaining all your existing benefits. With expert
          guidance, you can reduce costs without the hassle of switching
          providers or handling complex paperwork. We ensure a secure and
          confidential process, providing personalized solutions tailored to
          your needs. By using our service, you save time, gain financial
          advantages, and receive professional support every step of the way.
          Let us simplify the process for you and help you make the most of your
          insurance without any compromises.
        </p>
      </div>
    </Container>
  );
};

export default DetailsSection;
