import React from "react";
import Container from "../Container";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Advertise = ({ className }: { className?: string }) => {
  const advertiseItems = [
    {
      title: "Kostenlos & unverbindlich",
      description: `Die Anfrage sowie das Optimierungsangebot sind 100 % kostenlos und unverbindlich. Sie gehen keine Verpflichtung ein und entscheiden selbst, ob Sie das Angebot annehmen möchten.`,
      icon: "/advertise/free.png",
    },
    {
      title: "Bis zu 35 % sparen",
      description:
        "In 96 % der Fälle gelingt die Optimierung ohne Einschränkungen beim Leistungsumfang – bei einer möglichen monatlichen Ersparnis von bis zu 35 %. Das bedeutet oft eine Ersparnis im fünfstelligen Bereich über die Laufzeit.",
      icon: "/advertise/save.png",
    },
    {
      title: "Neutraler Vermittler ",
      description:
        "kv-tarif24.de ist kein Makler oder Honorarberater, sondern ein neutraler Vermittler. Wir vermitteln Ihnen den passenden Optimierungspartner und begleiten Sie transparent und unabhängig durch den gesamten Prozess.",
      icon: "/advertise/neutral.png",
      //   icon: require(""),
    },
    {
      title: "Optimierung ohne Anbieterwechsel",
      description:
        "Die Tarifoptimierung erfolgt ausschließlich innerhalb Ihrer bestehenden Versicherung. Dadurch bleiben Ihre Versicherungsnummer und Altersrückstellungen vollständig erhalten – ein großer Vorteil gegenüber einem Wechsel.",
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
