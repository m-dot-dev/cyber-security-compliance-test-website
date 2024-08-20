"use client";
import { routes } from "@/constants/routes";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";

import logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Sheet, SheetContent } from "../ui/sheet";

const AppHeader = () => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [showFleetDropdown, setShowFleetDropdown] = useState(false);
  const router = useRouter();

  // Define links based on user authentication
  const links = [
    { name: "About", url: routes.about },
    { name: "Solutions", url: routes.solutions },
    { name: "Consultancy", url: routes.consultancy },
    { name: "Highlights", url: routes.highlights },
    { name: "Digital Health Check", url: routes.digitalHealthCheck },
  ];

  return (
    <div className="w-full h-20 flex bg-secondary shadow-lg">
      <div className="container flex lg:space-x-8 max-lg:justify-between items-center">
        <div className="flex items-center space-x-20">
          <img
            src={logo.src}
            alt="logo"
            className="cursor-pointer"
            onClick={() => {
              router.push(routes.home);
            }}
          />
        </div>
        <div className="max-lg:flex gap-4 ">
          <div className="lg:hidden">
            {openDrawer ? (
              <X
                onClick={() => setOpenDrawer(false)}
                className="cursor-pinter"
                color="white"
                size={24}
              />
            ) : (
              <Menu
                onClick={() => setOpenDrawer(true)}
                color="white"
                className="cursor-pinter"
                size={24}
              />
            )}
          </div>
          <Sheet
            open={openDrawer}
            onOpenChange={() => {
              setOpenDrawer(!openDrawer);
            }}
            key={"right"}
          >
            <SheetContent
              side={"left"}
              className="bg-primary w-60 h-full "
              style={{
                zIndex: 1000,
              }}
            >
              <div className="flex flex-col overflow-visible">
                {links.map((link, index) => (
                  <React.Fragment key={index}>
                    <Link
                      key={index}
                      href={link.url || "/"}
                      className={`text-md font-normal text-primary-foreground hover:text-primary transition duration-300 ease-in-out my-3`}
                      style={{
                        color:
                          link.url?.split("?")[0] === pathname ? "#CA9923" : "",
                      }}
                      onClick={() => {
                        setOpenDrawer(false);
                      }}
                    >
                      {link.name}
                    </Link>
                  </React.Fragment>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex items-center space-x-8 max-lg:hidden">
            {isClient &&
              links.map((link, index) => (
                <div key={index}>
                  {link.name !== "Fleet" && (
                    <Link
                      href={link.url || "#"}
                      className={`text-md font-normal text-primary-foreground hover:text-primary transition duration-300 ease-in-out ${
                        link.url?.split("?")[0] === pathname ? "border-b-2" : ""
                      }`}
                      style={{
                        color:
                          link.url?.split("?")[0] === pathname ? "#CA9923" : "",
                      }}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
