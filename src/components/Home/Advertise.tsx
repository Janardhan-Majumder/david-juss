import React from "react";
import Container from "../Container";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Advertise = ({ className }: { className?: string }) => {
  const advertiseItems = [
    {
      title: "Free & Non-Binding",
      description:
        "The service is completely free and does not require any commitment.",
      icon: "/advertise/free.png",
    },
    {
      title: "Save on Premiums",
      description:
        "Users can save approximately 10-35% on their monthly insurance premiums.",
      icon: "/advertise/save.png",
    },
    {
      title: "Neutral Oversight",
      description:
        "The process is monitored by an independent and neutral partner to ensure fairness.",
      icon: "/advertise/neutral.png",
      //   icon: require(""),
    },
    {
      title: "Quick & Easy Process",
      description:
        "Enjoy a seamless and optimized insurance experience without complications.",
      icon: "/advertise/quick.png",
    },
  ];
  return (
    <Container
      parentClass={cn("", className)}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-between "
    >
      {advertiseItems.map((item, index: number) => (
        <div
          key={index}
          className="flex flex-col items-center gap-4 max-w-[95%] mx-auto"
        >
          <Image
            alt="advertise"
            src={item.icon}
            width={500}
            height={500}
            className="max-w-32 lg:max-w-36"
          />
          <h3 className="text-center text-2xl md:text-3xl font-semibold text-heading pt-2">
            {item.title}
          </h3>
          <p className="text-center text-hash">{item.description}</p>
        </div>
      ))}
    </Container>
  );
};

export default Advertise;
