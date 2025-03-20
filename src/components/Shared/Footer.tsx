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
            KV-tarif24 helps private health insurance policyholders reduce their
            premiums without switching providers or losing benefits.
            Transparent, secure, and risk-free—start saving today!
          </p>
        </div>
        <div className="grid lg:grid-cols-3 justify-center lg:justify-between  lg:w-2/3 xl:w-1/2 w-full gap-4">
          <div className="text-center lg:text-start">
            <h3 className="font-semibold text-2xl">Explore</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/beauticians">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="text-center lg:text-start">
            <h3 className="font-semibold text-2xl">Utility Pages</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Use</Link>
              </li>
            </ul>
          </div>
          <div className="text-center lg:text-start">
            <h3 className="font-semibold text-2xl">Get In Touch</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a href="mailto:peardup@gmail.com">peardup@gmail.com</a>
              </li>
              <li>
                <a href="tel:+(009) 56567890">(009) 56567890</a>
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
