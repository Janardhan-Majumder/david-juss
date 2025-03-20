
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import { TCommonProps } from "@/types/common.type";

const Layout = ({ children }: TCommonProps) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[85vh]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
