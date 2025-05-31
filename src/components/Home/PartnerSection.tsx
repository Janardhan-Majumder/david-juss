import React from "react";
import Container from "../Container";
import SectionHeading from "../ui/SectionHeading";
import Image from "next/image";

const PartnerSection = () => {
  const partners = [
    {
      image: "/partners/partner1.png",
    },
    {
      image: "/partners/partner2.png",
    },
    {
      image: "/partners/partner3.png",
    },
    {
      image: "/partners/partner4.png",
    },
    {
      image: "/partners/partner5.png",
    },
    {
      image: "/partners/partner6.png",
    },
  ];
  return (
    <Container className="space-y-9">
      <SectionHeading text="PKV Optimierung" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 justify-between items-center">
        {partners.map((item, index: number) => (
          <div key={index} className="max-w-36 mx-auto">
            <Image
              alt={"parter" + index}
              src={item.image}
              height={1000}
              width={1000}
              className="w-full"
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default PartnerSection;
