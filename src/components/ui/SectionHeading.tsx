import { cn } from "@/lib/utils";
import React from "react";

const SectionHeading = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold font-poppins text-heading",
        className
      )}
    >
      {text}
    </h1>
  );
};

export default SectionHeading;
