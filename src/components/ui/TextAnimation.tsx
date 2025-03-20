"use client";

import { motion } from "framer-motion";
  
  export default function TextAnimation({ sentence='' }: { sentence: string }) {
    const words = sentence.split(" ");
  return (
    <h2 className="text-center text-2xl leading-normal md:text-3xl md:leading-normal lg:text-5xl lg:leading-normal font-semibold font-roboto max-w-6xl mx-auto text-white">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, color: "#ffffff" }} // Starts as white
          animate={{ opacity: 0.5, color: ["#ffffff", "#facc15", "#ffffff"] }} // Yellow to White transition
          transition={{
            duration: 1, // Duration for each word
            delay: index * 0.1, // Stagger effect
            ease: "easeInOut",
          }}
          className="inline-block mr-1"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </h2>
  );
}
