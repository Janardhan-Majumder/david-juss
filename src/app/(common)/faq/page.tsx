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
      question: "Ist die Optimierungsanfrage wirklich kostenlos?",
      answer:
        "Ja. Die Anfrage und die Angebotserstellung sind komplett kostenlos und unverbindlich. Erst wenn Sie sich aktiv für die Umsetzung entscheiden, wird ein Honorar fällig – das Sie direkt mit dem Optimierer abrechnen.",
    },
    {
      id: 2,
      question: "Muss ich meine Krankenversicherung wechseln?",
      answer:
        "Nein. Die Tarifoptimierung erfolgt ausschließlich innerhalb Ihres aktuellen Versicherers. Ein Anbieterwechsel ist nicht nötig – und auch nicht sinnvoll, da dabei Altersrückstellungen verloren gehen können.",
    },
    {
      id: 3,
      question: "Bleiben meine Altersrückstellungen erhalten?",
      answer:
        "Ja, und das ist besonders wichtig! Da Sie bei Ihrer Versicherung bleiben, bleiben Ihre Altersrückstellungen vollständig erhalten – im Gegensatz zu einem Anbieterwechsel, bei dem große Teile verloren gehen könnten.",
    },
    {
      id: 4,
      question: "Welche Ersparnis ist möglich?",
      answer:
        "In der Praxis sind bis zu 35 % Beitragsersparnis pro Monat möglich – ohne Verlust von Leistungen. Auf die Laufzeit gerechnet kann das eine Ersparnis im mittleren fünfstelligen Bereich bedeuten.",
    },
    {
      id: 5,
      question: "Muss ich mit Leistungseinbußen rechnen?",
      answer:
        "In 96 % der Fälle erfolgt die Optimierung ohne Einschränkung bei den Leistungen. Das Ziel ist immer, Ihren Beitrag zu senken – nicht Ihre Absicherung.",
    },
    {
      id: 6,
      question: "Ist jeder Tarif optimierbar?",
      answer:
        "Nein. Etwa 85 % der Tarife sind grundsätzlich optimierbar. Manche Tarife – insbesondere der Standardtarif oder Basistarif – lassen sich nicht optimieren, da sie bereits gesetzlich reguliert sind oder keine Tarifalternativen innerhalb der Versicherung bieten. Ob eine Optimierung möglich ist, erkennen unsere Partner direkt anhand Ihrer Angaben im Anfrageformular.",
    },
    {
      id: 7,
      question: "Wie lange dauert es, bis ich ein Angebot erhalte?",
      answer:
        "In der Regel erhalten Sie innerhalb von 2 bis 4 Werktagen ein individuelles Optimierungsangebot von unserem Partner. In Einzelfällen – z. B. bei komplexeren Tarifen oder Rückfragen durch den Versicherer – kann es etwas länger dauern.\nSie werden in jedem Fall zeitnah per E-Mail informiert, sobald Ihr Angebot vorliegt.",
    },
    {
      id: 8,
      question: "Wer erhält meine Daten?",
      answer:
        "Ihre Angaben werden ausschließlich über HTTPS verschlüsselt übermittelt. Nur im Falle einer Angebotsannahme werden sie an den jeweiligen Partner weitergegeben.",
    },
    {
      id: 9,
      question: "Ist kv-tarif24.de ein Makler oder Honorarberater?",
      answer:
        "Nein. Wir sind ein neutraler Vermittler und begleiten Sie durch den gesamten Optimierungsprozess. Wir beraten nicht selbst, sondern wählen für Sie den passenden Partner aus.",
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
          Häufig gestellte Fragen(FAQ){/* FREQUENTLY ASKED QUESTION */}
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
