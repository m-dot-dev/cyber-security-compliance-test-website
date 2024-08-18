"use client";

import DigitalHealthCheckForm from "@/components/common/DigitalHealthCheckForm";
import FloatingWhatsAppComponent from "@/components/common/FloatingWhatsAppComponent";
import HeaderHero from "@/components/common/HeaderHero";

const LandingPage = () => {
  return (
    <div className="bg-white relative">
      <div className="relative flex flex-col">
        <HeaderHero />
        <div className="flex justify-center"></div>
        <div className="bg-secondary pt-24 pb-24 my-14">
          <div className="my-14 container">
            <DigitalHealthCheckForm />
          </div>
        </div>
      </div>

      <FloatingWhatsAppComponent />
    </div>
  );
};

export default LandingPage;
