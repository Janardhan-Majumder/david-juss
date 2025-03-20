"use client";
import { cn } from "@/lib/utils";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const NavigateButton = ({
  className,
  forword,
  label,
  size,
}: {
  className?: string;
  forword: string;
  label: string;
  size?: "small" | "large" | "middle";
}) => {
  const router = useRouter();
  return (
    <Button
      type="primary"
      size={size || "large"}
      className={cn("w-full", className)}
      onClick={() => router.push(forword)}
    >
      {label}
    </Button>
  );
};

export default NavigateButton;
