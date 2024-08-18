"use client";

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
} from "@tabler/icons-react";
import car1 from "@/assets/car1.png";
import car2 from "@/assets/car2.png";
import car3 from "@/assets/car3.png";
import car4 from "@/assets/car4.png";
import logo from "@/assets/logofooter.png";
import { routes } from "@/constants/routes";

import { useRouter } from "next/navigation";

const AppFooter = () => {
  const router = useRouter();
  const companyEmail = "companyEmail@company.email";
  const companyPhone = "+1 1234567890";
  const aboutUsLinks = [{ name: "Privacy Policy", url: "" }];
  const quickLinks = [{ name: "About Us", url: routes.about }];
  return (
    <div
      className="bg-white relative z-10"
      style={{
        zIndex: 99,
      }}
    >
      <div className="container py-24">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-end">
          <div className="w-full lg:w-1/4">
            <img
              src={logo.src}
              alt="logo"
              className="mb-4 cursor-pointer"
              onClick={() => {
                router.push(routes.home);
              }}
            />
            <div className="text-md font-normal leading-9">{"tagline"}</div>
          </div>
          <div className="w-full lg:w-1/4">
            <div className="text-xl font-bold mb-8">Quick Links</div>

            <div className="text-md font-normal space-y-4">
              {quickLinks.map((link, index) => (
                <div
                  key={index}
                  className="cursor-pointer text-secondary hover:text-primary transition duration-300 ease-in-out"
                  onClick={() => {
                    router.push(link.url);
                  }}
                >
                  {link.name}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/4">
            <div className="text-xl font-bold mb-8">About Us</div>
            <div className="text-md font-normal space-y-4">
              {aboutUsLinks.map((link, index) => (
                <div
                  key={index}
                  className="cursor-pointer text-secondary hover:text-primary transition duration-300 ease-in-out"
                  onClick={() => {
                    router.push(link.url);
                  }}
                >
                  {link.name}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/4">
            <div className="text-xl font-bold mb-8 z-10">Contact Us</div>
            <div className="flex flex-col space-y-4 z-10">
              <a href={`tel:${companyPhone}`} className="z-10">
                {companyPhone}
              </a>
              <a href={`mailto:${companyEmail}`} className="z-10">
                {companyEmail}
              </a>
            </div>
            <div
              className="mt-4"
              style={{
                zIndex: 9999,
              }}
            >
              <div className=" flex gap-4 items-center">
                <div
                  className="p-1 bg-secondary w-6 h-6 flex items-center justify-center rounded-full z-10 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/profile.php?id=61558942433369&mibextid=ZbWKwL"
                    )
                  }
                >
                  <IconBrandFacebook
                    stroke={1}
                    color="white"
                    fill="white"
                    size={24}
                  />
                </div>
                <div className="p-1 bg-secondary w-6 h-6 flex items-center justify-center rounded-full z-10 cursor-pointer">
                  <IconBrandInstagram stroke={2} color="white" size={24} />
                </div>
                <div className="p-1 bg-secondary w-6 h-6 flex items-center justify-center rounded-full z-10 cursor-pointer">
                  <IconBrandTiktok
                    stroke={1}
                    color="white"
                    fill="white"
                    size={24}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:flex justify-center -z-10 opacity-10">
        <img
          src={car3.src}
          alt="hero"
          className="object-contain object-right absolute top-12 right-48 "
        />
        <img
          src={car1.src}
          alt="hero"
          className="object-contain object-right absolute top-14 right-40 "
        />
        <img
          src={car2.src}
          alt="hero"
          className="object-contain object-right absolute top-24 right-6 "
        />
        <img
          src={car4.src}
          alt="hero"
          className="object-contain object-right absolute top-36 right-0 "
        />
      </div>
    </div>
  );
};

export default AppFooter;
