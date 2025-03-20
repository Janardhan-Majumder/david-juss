import Advertise from "@/components/Home/Advertise";
import CommitmentSection from "@/components/Home/CommitmentSection";
import DetailsSection from "@/components/Home/DetailsSection";
import Header from "@/components/Home/Header";
import PartnerSection from "@/components/Home/PartnerSection";
import WorksSection from "@/components/Home/WorksSection";

export default function Home() {
  return (
    <>
      <Header />
      <WorksSection />
      <Advertise />
      <DetailsSection />
      <PartnerSection />
      <CommitmentSection/>
    </>
  );
}
