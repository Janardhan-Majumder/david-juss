import React from "react";
import Container from "../Container";
import SectionHeading from "../ui/SectionHeading";
import * as motion from "motion/react-client";
const WorksSection = () => {
  const fadeUpAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { amount: 0.2 }, // Triggers when 20% of the element is visible
  };

  const staggeredAnimation = (delay: number) => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease: "easeOut" },
    viewport: { amount: 0.2 },
  });
  return (
    <>
      <Container className="space-y-6 lg:space-y-10">
        <SectionHeading text="HOW IT WORKS" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 max-w-7xl mx-auto text-xl xl:text-2xl">
          <div
            //   style={{
            //     clipPath: "polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)",
            //   }}
            className="py-6 lg:py-10 px-10 flex items-center justify-center text-center bg-primary font-medium md:-mr-3 rounded md:[clip-path:polygon(0%_0%,90%_0%,100%_50%,90%_100%,0%_100%)]"
          >
            <p className="max-w-xs mx-auto text-heading">
              Sie füllen unser Onlineformular aus – schnell, anonym und sicher.
            </p>
          </div>
          <div className="py-6 lg:py-10 px-10 flex items-center justify-center text-center bg-playground font-medium md:-mx-3 rounded md:[clip-path:polygon(90%_0%,100%_50%,90%_100%,0%_100%,10%_50%,0%_0%)]">
            <p className="max-w-xs mx-auto text-heading">
              Wir wählen auf dieser Basis den passenden Optimierungspartner für
              Sie aus.
            </p>
          </div>
          <div className="py-6 lg:py-10 px-10 flex items-center justify-center text-center bg-primary font-medium md:-ml-3 rounded md:[clip-path:polygon(100%_0,100%_50%,100%_100%,0%_100%,10%_50%,0%_0%)]">
            <p className="max-w-xs mx-auto text-heading">
              Sie erhalten innerhalb von 2–4 Werktagen ein kostenloses und
              unverbindliches Angebot.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-6 lg:grid-cols-11 gap-5 pt-8">
          {/* Left Text Box */}
          <motion.div
            {...fadeUpAnimation}
            className="col-span-6 lg:col-span-5 bg-playground rounded-lg space-y-3 p-6 lg:p-10"
          >
            <h2 className="text-2xl lg:text-3xl font-semibold text-heading font-poppins">
              Your Advantages
            </h2>
            <p className="text-hash">
              With our help, you can easily optimize your insurance and reduce
              costs without changing your provider. We analyze your current plan
              and find the best savings opportunities for you. Fast, secure, and
              free. <br /> <br /> By comparing multiple offers simultaneously,
              we ensure maximum savings while keeping your benefits unchanged.
            </p>
          </motion.div>

          {/* Stats Box 1 */}
          <motion.div
            {...staggeredAnimation(0.3)}
            className="col-span-3 bg-primary rounded-lg space-y-3 p-6 lg:p-8 text-center h-fit"
          >
            <h2 className="text-4xl lg:text-6xl font-semibold text-white">
              28%
            </h2>
            <p className="text-hash">
              Average savings on the monthly contribution of all optimized
              customers
            </p>
          </motion.div>

          {/* Stats Box 2 */}
          <motion.div
            {...staggeredAnimation(0.6)}
            className="col-span-3 bg-[#78C6C8] rounded-lg space-y-4 p-6 lg:p-8 text-center h-fit"
          >
            <h2 className="text-4xl lg:text-6xl font-semibold text-white">
              2753
            </h2>
            <p className="text-hash">
              Successful optimizations in the last 365 days
            </p>
          </motion.div>
        </div>
      </Container>
    </>
  );
};

export default WorksSection;
