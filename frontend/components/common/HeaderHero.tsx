import { Button } from "@/components/ui/button";
import { routes } from "@/constants/routes";
import { useRouter } from "next/navigation";

const HeaderHero = () => {
  const router = useRouter();
  const headerClass = "text-secondary font-semibold";
  return (
    <div className="relative bg-white z-0">
      <div className=" pt-16 pb-16 bg-white lg:flex-row justify-between z-10 items-center relative container clip-path-polygon">
        <div className="space-y-6 ">
          <h1
            className="z-20 lg:text-[45px] text-primary md:text-[30px] font-bold leading-[30px] lg:leading-[65px] xl:w-[700px] lg:w-[550px] md:w-[500px] text-[30px]"
            style={{
              textTransform: "uppercase",
            }}
          >
            <span className={headerClass}>Effortless </span>Cyber Security
            Compliance.<span className={headerClass}></span>
            <span className={headerClass}>Test Your's</span> today!
          </h1>
          <h3 className="xl:w-[630px] lg:w-[500px] md:w-[500px]">
            Achieving digital health and adhering to cybersecurity standards can
            seem <strong>overwhelming</strong>. However, we've got you{" "}
            <strong>covered</strong>. Spend just <strong>15 minutes</strong> on
            our site to save <strong>thousands of dollars</strong> and ensure{" "}
            <strong>robust protection</strong> against future cyber threats.
          </h3>
          <div className="md:space-x-6 space-y-6 md:space-y-0 flex md:flex-row flex-col w-3/4">
            <Button
              size="lg"
              variant={"gradient"}
              className="w-[230px]"
              onClick={() => {
                router.push(routes.digitalHealthCheck);
              }}
            >
              Check Your Compliance?
            </Button>
            <Button
              size="lg"
              variant={"default"}
              className="w-[200px]"
              onClick={() => {
                router.push(routes.consultancy);
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="-z-10 object-contain object-right lg:absolute lg:top-0 right-0 h-full container pb-28 bg-gradient-to-b from-tertiary to-primary hidden lg:block"></div>
      <div className="relative lg:static z-0 lg:top-0 right-0 h-full container pb-96 lg:pb-0 bg-gradient-to-b from-tertiary to-primary">
        <iframe
          className="px-20 py-5 pb-16 object-contain object-right absolute top-5 right-5 z-10 w-full lg:w-5/12 h-full"
          src="https://www.youtube.com/embed/JpfEBQn2CjM"
          title="Pause, think and act -  - Cyber security awareness video - Security Quotient"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default HeaderHero;
