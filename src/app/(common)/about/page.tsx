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
              Über uns
            </h2>
            <p className="text-sm lg:text-base">
              <span className="font-semibold">kv-tarif24.de</span> ist Ihr
              neutraler Partner, wenn es um die Optimierung Ihrer privaten
              Krankenversicherung (PKV) geht –{" "}
              <span className="font-semibold">
                ohne Anbieterwechsel, ohne Risiko und ohne Verpflichtung
              </span>
              .
            </p>
          </div>
        </Container>
      </div>
      <div className="bg-heading [clip-path:polygon(100%_0,100%_85%,50%_100%,0_85%,0_0,50%_0)] lg:[clip-path:polygon(100%_0,100%_75%,50%_100%,0_75%,0_0,50%_0)]">
        <Container parentClass="pb-16 lg:pb-12 pt-20 md:pt-16" className="">
          <div className="space-y-5 w-full lg:max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-semibold font-poppins leading-normal lg:leading-normal">
              Wer wir sind ?
            </h2>
            <p className="px-4 lg:px-0 font-normal">
              Unser Ziel ist es, privat Krankenversicherten zu helfen, ihre
              Beiträge deutlich zu senken,{" "}
              <span className="font-medium">
                ohne auf Leistungen verzichten zu müssen
              </span>
              .
            </p>
            <p>
              Viele Versicherte zahlen deutlich mehr als nötig für ihren
              privaten Krankenversicherungsschutz – oft über Jahre hinweg. Die
              Ursachen liegen in veralteten Tarifen, fehlender Transparenz oder
              schlicht mangelnder Beratung. Genau hier setzt kv-tarif24.de an:{" "}
              <span className="font-medium">
                Wir bringen Sie mit dem passenden Optimierungs-Partner zusammen
              </span>
              , der auf Basis Ihrer Angaben ein{" "}
              <span className="font-medium">
                kostenloses und unverbindliches Angebot
              </span>{" "}
              für eine Tarifoptimierung innerhalb Ihrer bestehenden Versicherung
              erstellt.
            </p>
          </div>
        </Container>
      </div>
      <Container parentClass="py-10" className="space-y-5">
        <div className="space-y-5 w-full lg:max-w-2xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold font-poppins leading-normal lg:leading-normal">
            was wir für Sie tun ?
          </h2>
          <p className="font-medium">Neutral, digital & kundenorientiert</p>
          <p className="">
            Wir sind{" "}
            <span className="font-medium">
              kein Makler, kein Versicherungsberater
            </span>{" "}
            und <span className="font-medium">kein Honorarberater</span>.
            kv-tarif24.de versteht sich{" "}
            <span className="font-medium">
              ausschließlich als unabhängiger Vermittler
            </span>
            , der Ihnen den Zugang zu kompetenten Optimierern ermöglicht – ohne
            Interessenskonflikte, ohne Verkaufsdruck und ohne Maklerbindung.
            <br /> <br />
            Dabei agieren wir{" "}
            <span className="font-medium">
              ausschließlich im Sinne des Kunden
            </span>
            : Wir begleiten den gesamten Prozess aus Kundensicht, sorgen für
            eine einfache Kommunikation, achten auf Sicherheit bei der
            Datenübertragung und halten den Aufwand für Sie so gering wie
            möglich.
          </p>
        </div>
        <div className="space-y-5 w-full lg:max-w-2xl mx-auto pt-4 ">
          <h2 className="text-3xl lg:text-4xl font-semibold font-poppins leading-normal lg:leading-normal text-center">
            was wir für Sie tun ?
          </h2>
          <div className="">
            <Image
              alt="free"
              src={"/images/about-2ndimg.png"}
              width={1000}
              height={1000}
              className="w-full"
            />
          </div>

          <p>
            Unsere Dienstleistung basiert auf einem{" "}
            <span className="font-medium">
              transparenten, digitalen Prozess
            </span>
            :
          </p>
          <ul className="list-none space-y-2.5">
            <li className="flex gap-1">
              <span className="w-5">1. </span>
              <p className="flex-1">
                Sie füllen unser{" "}
                <span className="font-medium">Onlineformular</span> aus –
                schnell, anonym und sicher.
              </p>
            </li>
            <li className="flex gap-1">
              <span className="w-5">2. </span>
              <p className="flex-1">
                Unser System erkennt bereits bei der Eingabe, ob Ihr Tarif
                grundsätzlich optimierbar ist.
              </p>
            </li>
            <li className="flex gap-1">
              <span className="w-5">3. </span>
              <p className="flex-1">
                Wir wählen auf dieser Basis{" "}
                <span className="font-medium">
                  den passenden Optimierungspartner
                </span>
                für Sie aus.
              </p>
            </li>
            <li className="flex gap-1">
              <span className="w-5">4. </span>
              <p className="flex-1">
                Sie erhalten{" "}
                <span className="font-medium">innerhalb von 2–4 Werktagen</span>{" "}
                ein kostenloses und unverbindliches Angebot.
              </p>
            </li>
            <li className="flex gap-1">
              <span className="w-5">5. </span>
              <p className="flex-1">
                Erst wenn Sie das Angebot annehmen, wird ein Honorar fällig –
                direkt über den Optimierer abgerechnet.
              </p>
            </li>
            <li className="flex gap-1">
              <span className="w-5">6. </span>
              <p className="flex-1">
                Die Änderung Ihres Tarifs wird{" "}
                <span className="font-medium">
                  schriftlich durch Ihre Versicherung bestätigt
                </span>
                .
              </p>
            </li>
          </ul>
          <p>
            Die gesamte Optimierung erfolgt{" "}
            <span className="font-medium">
              innerhalb Ihrer bestehenden Versicherung
            </span>{" "}
            – das bedeutet:{" "}
            <span className="font-medium">
              kein Anbieterwechsel, keine neue Versicherungsnummer
            </span>
            , und ganz besonders wichtig:{" "}
            <span className="font-medium">
              Ihre Altersrückstellungen bleiben vollständig erhalten
            </span>
            .
          </p>
        </div>
      </Container>
    </>
  );
};

export default page;
