"use client";
import Container from "@/components/Container";
import { timeAgo } from "@/lib/utils";
import React, { createElement } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";

const Page = () => {
  const data = {
    data: [
      {
        user: {
          image: "1740139773413-young-caucasian-woman-using-lapt.jpg",
          id: "cm7ddl2nu0000w8nc8nrdetma",
          name: "Anika Khan",
        },
        message: "You have a Payment of the user.",
        createdAt: new Date("2025-02-25T08:50:00.230Z").toLocaleString(),
      },
      {
        user: {
          image: "1740139773413-young-caucasian-woman-using-lapt.jpg",
          id: "cm7ddl2nu0000w8nc8nrdetma",
          name: "Anika Khan",
        },
        message:
          "Iftekhar Salmin has booked an appointment with you on Wed Feb 26 2025 00:00:00 GMT+0600 (Bangladesh Standard Time)",
        createdAt: new Date("2025-02-25T08:48:42.025Z").toLocaleString(),
      },
      {
        user: {
          image: "1740139773413-young-caucasian-woman-using-lapt.jpg",
          id: "cm7ddl2nu0000w8nc8nrdetma",
          name: "Anika Khan",
        },
        message: "You have a Payment of the user.",
        createdAt: new Date("2025-02-24T12:17:22.170Z").toLocaleString(),
      },
      {
        user: {
          image: "1740139773413-young-caucasian-woman-using-lapt.jpg",
          id: "cm7ddl2nu0000w8nc8nrdetma",
          name: "Anika Khan",
        },
        message: "You have a Payment of the user.",
        createdAt: new Date("2025-02-24T12:15:23.206Z").toLocaleString(),
      },
      {
        user: {
          image: "1740139773413-young-caucasian-woman-using-lapt.jpg",
          id: "cm7ddl2nu0000w8nc8nrdetma",
          name: "Anika Khan",
        },
        message: "You have a Payment of the user.",
        createdAt: new Date("2025-02-24T12:12:27.269Z").toLocaleString(),
      },
      {
        user: {
          image: "1740139773413-young-caucasian-woman-using-lapt.jpg",
          id: "cm7ddl2nu0000w8nc8nrdetma",
          name: "Anika Khan",
        },
        message:
          "Nice Girl has booked an appointment with you on Fri Mar 21 2025 00:00:00 GMT+0600 (Bangladesh Standard Time)",
        createdAt: new Date("2025-02-21T12:22:50.947Z").toLocaleString(),
      },
      {
        user: {
          image: "1740139773413-young-caucasian-woman-using-lapt.jpg",
          id: "cm7ddl2nu0000w8nc8nrdetma",
          name: "Anika Khan",
        },
        message:
          "Nice mam has booked an appointment with you on Thu Jan 21 2027 00:00:00 GMT+0600 (Bangladesh Standard Time)",
        createdAt: new Date("2025-02-21T09:05:17.046Z").toLocaleString(),
      },
      {
        user: {
          image: "1740139773413-young-caucasian-woman-using-lapt.jpg",
          id: "cm7ddl2nu0000w8nc8nrdetma",
          name: "Anika Khan",
        },
        message:
          "Nice mam has booked an appointment with you on Wed Mar 05 2025 00:00:00 GMT+0600 (Bangladesh Standard Time)",
        createdAt: new Date("2025-02-21T09:02:39.975Z").toLocaleString(),
      },
      {
        user: {
          image: "1740139773413-young-caucasian-woman-using-lapt.jpg",
          id: "cm7ddl2nu0000w8nc8nrdetma",
          name: "Anika Khan",
        },
        message:
          "Nice mam has booked an appointment with you on Sat Feb 22 2025 00:00:00 GMT+0600 (Bangladesh Standard Time)",
        createdAt: new Date("2025-02-21T07:14:09.242Z").toLocaleString(),
      },
      {
        user: {
          image: "1740139773413-young-caucasian-woman-using-lapt.jpg",
          id: "cm7ddl2nu0000w8nc8nrdetma",
          name: "Anika Khan",
        },
        message:
          "Nice mam has booked an appointment with you on Thu Feb 27 2025 00:00:00 GMT+0600 (Bangladesh Standard Time)",
        createdAt: new Date("2025-02-21T06:23:28.802Z").toLocaleString(),
      },
    ],
  };
  console.log(data);
  return (
    <Container className="space-y-5 lg:space-y-8 pt-0 lg:pt-0">
      <h1 className="text-2xl font-semibold w-full bg-blue-500 px-5 py-4 text-white">
        Notifications
      </h1>
      <div className="max-w-full w-full flex flex-col gap-6 md:gap-10 mx-auto py-3 pb-16">
        {data?.data?.map((notification, index: number) => (
          <div key={index} className="flex items-center gap-3 lg:gap-5">
            <div className="rounded-full">
              {createElement(IoIosNotificationsOutline, {
                className: "size-8 text-slate-600",
              })}
            </div>
            <div className="space-y-1">
              <p className="text-sm md:text-base text-slate-700 dark:text-white/85">
                {notification?.message}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                {timeAgo(notification?.createdAt)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Page;
