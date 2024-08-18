import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";
import hero4 from "../../assets/hero4.png";

import { IconSearch } from "@tabler/icons-react";
import conactBack from "../../assets/contactBack.png";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
const ContactFAQHeader = ({
  isFaq,
  search,
  setSearch,
}: {
  isFaq?: boolean;
  search?: string;
  setSearch?: any;
}) => {
  return (
    <div className="relative">
      <div className={`${isFaq && "blur-sm opacity-70"}`}>
        <img
          src={conactBack.src}
          alt="Contact Us"
          className={`w-full object-cover ${!isFaq && "h-96"}`}
        />
        <div className="flex items-center justify-center">
          <div className="flex absolute bottom-0 right-auto left-auto -space-x-44  max-xl:hidden z-0">
            <img
              src={hero1.src}
              alt="Contact Us"
              className="object-contain"
              style={{
                zIndex: 9999,
              }}
            />
            <img
              src={hero2.src}
              alt="Contact Us"
              className="object-contain z-[1]"
              style={{
                zIndex: 999,
              }}
            />
            <img
              src={hero3.src}
              alt="Contact Us"
              className="object-contain z-[1]"
            />
            <img
              src={hero4.src}
              alt="Contact Us"
              className="object-contain z-0"
            />
          </div>
        </div>
      </div>
      <div className="max-md:hidden">
        {isFaq && (
          <div className="flex items-center justify-center text-center">
            <div className="absolute top-28 space-y-16 max-xl:top-10 max-xl:space-y-4">
              <h1 className="text-5xl max-xl:text-3xl font-semibold text-primary-foreground">
                Frequently Asked Questions
              </h1>
              <div className="w-full flex items-center justify-center">
                <p className="text-primary-foreground text-2xl max-xl:text-xl w-3/4">
                  Here are some basic questions and answers to help you get
                  started.
                </p>
              </div>

              <div className="flex items-center rounded-md pl-4 relative">
                <div className="border-2 border-r-0 rounded-r-none p-[13px] max-lg:p-[5px] rounded-lg">
                  <IconSearch size={30} color={"white"} />
                </div>
                <Input
                  placeholder="Search for a question"
                  className="bg-transparent outline-none border-2 border-l-0 border-r-0 p-7 max-lg:p-5 rounded-none text-xl text-white placeholder:text-white placeholder:text-lg"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Button
                  variant={"gradient"}
                  className="text-xl w-32 h-16 max-lg:h-12"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactFAQHeader;
