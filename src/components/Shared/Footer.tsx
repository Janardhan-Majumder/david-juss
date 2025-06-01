import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container";

export default function Footer() {
  return (
    <footer className="text-white relative bg-sky-900/80 md:bg-sky-900/0">
      <Image
        src="/images/footer-bg.png"
        alt="hero"
        className="hidden md:block absolute -z-10 object-cover object-center"
        fill
        // width={1000}
        // height={1000}
        sizes="100vw"
      />
      <Container className="flex flex-col  lg:flex-row items-center md:justify-between gap-10 py-10">
        <div className="text-center md:text-start">
          <Image
            src="/images/footer-logo.svg"
            alt="logo"
            width={1000}
            height={1000}
            // style={{
            //   maxWidth: "100%",
            //   height: "auto"
            // }}
            className="max-w-[200px] xl:max-w-[240px] mx-auto lg:mx-0 lg:-ml-2"
          />
          <p className="font-normal max-w-xs md:max-w-lg mt-4 text-center lg:text-start">
            Wir machen die Tarifoptimierung in der privaten Krankenversicherung
            so einfach, sicher und transparent wie möglich. Ohne Druck, ohne
            Kleingedrucktes – und mit einem echten Mehrwert für Sie.
          </p>
          <p className="font-normal max-w-xs md:max-w-lg mt-2 text-center lg:text-start">
            kv-tarif24.de – weil guter Schutz nicht teuer sein muss.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 justify-center lg:justify-between  lg:w-2/3 xl:w-1/2 w-full gap-4">
          <div className="text-center lg:text-start">
            <h3 className="font-semibold text-2xl">PKV-Optimierung</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link href="/about">Über uns</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="#">PKV-Optimierung</Link>
              </li>
              <li>
                <Link href="#">PKV Tarif wechsel</Link>
              </li>
            </ul>
          </div>
          <div className="text-center lg:text-start">
            <h3 className="font-semibold text-2xl">Rechtliche Inhalte</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link href="/privacy">Datenschutzerklärung</Link>
              </li>
              <li>
                <Link href="/terms">AGB</Link>
              </li>
              <li>
                <Link href="/impressum">Impressum</Link>
              </li>
            </ul>
          </div>
          <div className="text-center lg:text-start">
            <h3 className="font-semibold text-2xl">Kontakt zu uns</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link href="/contact">info@kv-tarif24.de</Link>
              </li>
              <li>
                Bitte nutzen Sie für konkrete Rückfragen zu Ihrer Anfrage
                bevorzugt die E-Mail-Adresse. Unser Team antwortet in der Regel
                <span className="font-medium">
                  {" "}
                  innerhalb von 1–2 Werktagen
                </span>
                .
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <p className="py-5 text-sm md:text-base text-center border-t  border-playground">
        ©{new Date().getFullYear()}Kv-trif24. All Rights Reserved
      </p>
    </footer>
  );
}
