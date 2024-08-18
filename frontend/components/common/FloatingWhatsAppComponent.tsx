"use client";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../../assets/logo.png";

const FloatingWhatsAppComponent = () => {
  return (
    <div
      style={{
        zIndex: 9999,
      }}
    >
      <h1 className="fixed text-[1.5rem] text-primary z-40 bottom-[2.8rem] right-[6.4rem] bold">
        Book Now
      </h1>
      <FloatingWhatsApp
        phoneNumber="+16518902400"
        accountName="Royal Limo Co."
        avatar={logo.src}
      />
    </div>
  );
};

export default FloatingWhatsAppComponent;
