import Container from "@/components/Container";
import Advertise from "@/components/Home/Advertise";
import NavigateButton from "@/components/ui/NavigateButton";
import Image from "next/image";
import React from "react";
type Params = Promise<{ id: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export type TPageProps = { params: Params; searchParams: SearchParams };

const page = async (props: TPageProps) => {
  const { email } = await props.searchParams;
  console.log(email);

  const text = "Gute Nachrichten";
  const items = [
    {
      title: "Phone Number",
      description: "So we can reach out if needed",
      icon: "/images/phone.png",
    },
    {
      title: "Email Address",
      description: "To send you a confirmation and offer details",
      icon: "/images/mail.png",
    },
    {
      title: "Digital Signature",
      description: "To securely approve the optimization process",
      icon: "/images/signature.png",
    },
  ];
  return (
    <>
      <div className="relative">
        <Image
          src="/bgs/optimizable-bg.png"
          alt="hero"
          className=" absolute -z-10 object-cover object-center"
          fill
          // width={1000}
          // height={1000}
          sizes="100vw"
        />
        <Container className="text-center space-y-5">
          <div className="flex justify-center gap-2 uppercase text-base sm:text-xl md:text-2xl text-white">
            {text.split("").map((character, indx) => (
              <h4 key={indx}>{character}</h4>
            ))}
          </div>
          <h2 className="text-4xl lg:text-6xl text-primary font-medium">
            Ihr Tarif ist optimierbar!
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white lg:max-w-[70%] mx-auto leading-normal lg:leading-normal">
            Great news! We have analyzed your details, and your current
            insurance policy can be optimized to save you money while keeping
            all your benefits.
          </p>
        </Container>
      </div>

      <Container parentClass="py-5" className="space-y-4">
        <h3 className="text-center text-3xl sm:text-4xl font-semibold text-heading pt-2">
          Take the Next Step
        </h3>
        <p className="text-base sm:text-lg lg:text-xl leading-normal lg:leading-normal text-hash text-center">
          To proceed with your personalized optimization, we need a few details
          to finalize your savings offer:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 justify-between max-w-5xl mx-auto pt-24">
          {items.map((item, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 border border-yellow-100/80 shadow-sm p-6 rounded-lg"
            >
              <Image
                alt="advertise"
                src={item.icon}
                width={500}
                height={500}
                className="max-w-24 lg:max-w-28 -mt-20"
              />
              <h3 className="text-center text-2xl md:text-3xl font-semibold text-heading pt-1">
                {item.title}
              </h3>
              <p className="text-center text-hash">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-8">
          <NavigateButton
            forword={`/optimization?email=${email}`}
            label="START OPTIMIZATION"
            className="max-w-xs lg:max-w-md"
          />
        </div>
      </Container>
      <div className="bg-[#78C6C8] h-3 lg:h-4 w-full" />
      <Advertise className="bg-playground" />
    </>
  );
};

export default page;
