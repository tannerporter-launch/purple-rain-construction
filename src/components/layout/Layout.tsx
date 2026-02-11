import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import MobileStickyCTA from "@/components/ui/MobileStickyCTA";
import CookieConsent from "@/components/CookieConsent";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />
      <Header />
      <main className="flex-1 pb-20 md:pb-0">{children}</main>
      <Footer />
      <MobileStickyCTA />
      <CookieConsent />
    </div>
  );
};

export default Layout;
