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
        <div className="bg-background rounded-xl pl-3 sm:pl-5 p-5 sm:p-8 flex sm:gap-2 max-w-xs md:max-w-md lg:max-w-xl xl:max-w-2xl h-fit mb-6 shadow md:-mr-44 -mt-10 md:-mt-0 z-0">
          <RiDoubleQuotesR
            size={22}
            className="min-w-10 text-slate-400 scale-x-[-1.5]"
          />
          <p className="pt-2.5 md:text-lg lg:text-xl">
            <span className="font-medium">
              {`"Ich war überrascht, wie unkompliziert alles lief."`}
            </span>{" "}
            <br />
            „Ich bin seit über 15 Jahren privat versichert und dachte immer, ein
            Tarifwechsel wäre mit viel Aufwand und Risiko verbunden.
            kv-tarif24.de hat mir das Gegenteil bewiesen. Nach wenigen Tagen
            hatte ich ein konkretes Angebot – ganz ohne Druck oder
            Verpflichtung. Am Ende spare ich jetzt über 120 Euro im Monat –{" "}
            <span className="font-medium">
              bei gleichen Leistungen und ohne die Versicherung zu wechseln
            </span>
            . Absolut empfehlenswert!“{" "}
            <span className="font-medium">
              Markus L., 48, selbstständig aus Oldenburg
            </span>
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
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto">
        <div className="p-8 bg-primary space-y-5 h-full align-bottom flex flex-col justify-end">
          <SectionHeading text="Unser Versprechen" className="text-start text-xl md:text-3xl lg:text-4xl xl:text-5xl" />
          <div className="space-y-1">
            Bei <span className="font-medium">kv-tarif24.de</span> stehen{" "}
            <span className="font-medium">
              Transparenz, Sicherheit und Fairness
            </span>{" "}
            an erster Stelle. Wir möchten, dass Sie Ihre private
            Krankenversicherung{" "}
            <span className="font-medium">
              einfach und ohne Risiko optimieren können
            </span>{" "}
            – ohne versteckte Kosten, ohne Verpflichtungen und ohne
            Anbieterwechsel.
            <p>
              <span className="font-medium">
                100 % kostenlos & unverbindlich:
              </span>{" "}
              Sie erhalten ein Angebot zur Tarifoptimierung – kostenlos und ohne
              jegliche Verpflichtung.
            </p>
            <p>
              <span className="font-medium">
                Kein Wechsel der Versicherung:
              </span>{" "}
              Ihre Versicherungsnummer und Ihre Altersrückstellungen bleiben
              vollständig erhalten.
            </p>
            <p>
              <span className="font-medium">Kein Leistungsverlust:</span> In
              96 % der Fälle bleibt der Leistungsumfang gleich – bei oft
              deutlich geringeren Beiträgen.
            </p>
            <p>
              <span className="font-medium">
                Keine Datenweitergabe ohne Ihre Zustimmung:
              </span>{" "}
              Ihre Angaben sind sicher. Erst wenn Sie aktiv zustimmen, werden
              Ihre Daten an den Optimierungspartner übermittelt.
            </p>
            <p>
              <span className="font-medium">Keine Maklerbindung:</span> Wir sind
              unabhängig, neutral und vermitteln ausschließlich den passenden
              Experten für Ihren Tarif – ohne Verkaufsdruck, ohne
              Vertragsbindung.
            </p>
          </div>
        </div>
        <div className="h-full">
          <Image
            alt={"Service"}
            src={"/images/commitment.png"}
            height={1000}
            width={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Container>
  );
};

export default CommitmentSection;
