"use client";
import React, { createElement, useEffect, useState } from "react";
import Link from "next/link";
import { IoClose, IoNotifications } from "react-icons/io5";
import { Badge, Drawer } from "antd";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { RxHamburgerMenu } from "react-icons/rx";
const navs = [
  {
    label: "Home",
    value: "/",
  },
  {
    label: "About Us",
    value: "/about",
  },
  {
    label: "FAQ",
    value: "/faq",
  },
];
const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="shadow sticky top-0 left-0 w-full bg-white z-20">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6 2xl:px-2 py-3 lg:py-2 flex justify-between items-center gap-3">
          <div className="overflow-hidden">
            <Image
              className="max-w-[140px] md:max-w-[200px] xl:max-w-[240px] -ml-1 lg:-ml-2"
              alt="profile"
              src={"/images/derk-logo.svg"}
              width={1000}
              height={1000}
            />
          </div>
          <NavItems
            pathname={pathname}
            className="hidden lg:flex justify-center"
          />
          <div className=" flex justify-end items-center gap-3 lg:gap-5">
            {/* <Link
              href={"profile"}
              className="bg-heading rounded-full hidden lg:block"
            >
              <Image
                className="size-10 rounded-full "
                alt="profile"
                src={"/images/demo-profile.png"}
                width={200}
                height={200}
              />
            </Link> */}
            <Link href={"notification"}>
              <Badge
                dot={true}
                // offset={[0, 1]}
                style={{ transform: "scale(1.3)" }}
              >
                <IoNotifications className="size-[22px] lg:size-8 -mb-2 lg:-mb-2.5 text-heading overflow-hidden" />
              </Badge>
            </Link>
            <button
              onClick={() => setOpen((c) => !c)}
              className="lg:hidden bg-slate-50 p-0.5 rounded"
            >
              {createElement(open ? IoClose : RxHamburgerMenu, {
                size: "23",
              })}
            </button>
          </div>
        </div>
      </div>
      <Drawer
        title={<div>Profile Item</div>}
        onClose={onClose}
        open={open}
        width={280}
        style={{ right: 0, left: "auto" }}
      >
        <NavItems
          pathname={pathname}
          className="flex flex-col lg:hidden justify-center "
        />
      </Drawer>
    </>
  );
};

export default Navbar;

const NavItems = ({
  pathname,
  className,
}: {
  pathname: string;
  className?: string;
}) => {
  return (
    <ul className={cn("gap-5 lg:gap-6", className)}>
      <Link href={"profile"} className="lg:hidden">
        <li className="group -mb-1.5 w-fit text-base lg:text-lg text-slate-700">
          <span className="px-0.5 font-medium text-lg">{"Profile"}</span>
          <div
            className={cn(
              "h-0.5 bg-heading w-0 group-hover:w-full transition-all mx-auto",
              {
                "w-full": pathname === "profile",
              }
            )}
          ></div>
        </li>
      </Link>
      {navs.map((item) => (
        <Link key={item.value} href={item.value}>
          <li className="group -mb-1.5 w-fit">
            <span className="px-0.5 font-medium text-base lg:text-lg text-slate-700">
              {item.label}
            </span>
            <div
              className={cn(
                "h-0.5 bg-heading w-0 group-hover:w-full transition-all mx-auto",
                {
                  "w-full": pathname === item.value,
                }
              )}
            ></div>
          </li>
        </Link>
      ))}
    </ul>
  );
};
