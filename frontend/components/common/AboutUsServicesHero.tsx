import aboutImage from "@/assets/aboutImage.png";
import strip1 from "@/assets/strip1.png";
import strip2 from "@/assets/strip2.png";
import { Button } from "@/components/ui/button";
import { routes } from "@/constants/routes";
import { useRouter } from "next/navigation";
const AboutUsServicesHero = ({
  data,
}: {
  data: {
    title: string;
    description: string;
  };
}) => {
  const router = useRouter();
  return (
    <div className="relative md:p-20 p-5 overflow-hidden">
      <img
        src={strip2.src}
        alt="hero"
        className="absolute top-0 left-0 max-xl:hidden"
      />

      <div className="gap-10 container">
        <div className="xl:w-1/2 w-full space-y-8">
          <h1 className="text-5xl font-bold">
            {data.title ? data.title : "N/A"}
          </h1>
          <p className="mt-2 leading-8 text-[18px]">
            {data.description
              ? data.description
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, luctus neque sit amet, luctus dui. Fusce nec dui sit amet urna."}
          </p>
          <div className="space-x-4 flex ">
            <Button
              className="w-52 z-10"
              variant={"gradient"}
              onClick={() => {
                router.push(routes.bookNow);
              }}
            >
              Get a Quote
            </Button>
            <Button
              className="w-52"
              onClick={() => {
                router.push(routes.bookNow);
              }}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
      <div
        className="h-[520px] w-[520px] bg-gradient-to-br from-primary to-tertiary absolute -top-20 -right-20 max-xl:hidden"
        style={{
          clipPath: "circle(50% at 50% 50%)",
        }}
      ></div>
      <img
        src={strip1.src}
        alt="hero"
        className="absolute top-20 right-0 rotate-12 max-xl:hidden"
      />

      <img
        src={aboutImage.src}
        alt="hero"
        className="absolute top-10 right-0 max-xl:hidden"
      />
    </div>
  );
};

export default AboutUsServicesHero;
