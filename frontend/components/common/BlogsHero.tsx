import Link from "next/link";
import aboutImage from "../../assets/aboutImage.png";
import strip2 from "../../assets/strip2.png";
import { Button } from "../ui/button";
import { routes } from "@/constants/routes";
import { backendURL } from "@/constants/bankendURL";

interface HeroData {
  title: string;
  description: string;
  latestBlog?: {
    title: string;
    content: string;
    imageUrl: string;
    _id: string;
  };
}

const BlogsHero = ({ data }: { data: HeroData }) => {
  return (
    <div className="relative md:pb-0 md:p-20 overflow-hidden bg-gradient-to-b from-white to-gray-300 pb-0ss">
      <img
        src={strip2.src}
        alt="hero"
        className="absolute top-0 left-0 max-xl:hidden"
      />

      <div className="gap-10 container">
        <div className="xl:w-1/2 w-full space-y-8 mt-6">
          <h1 className="text-5xl font-bold">
            {data.title ? data.title : "N/A"}
          </h1>
          <p className="mt-2 leading-8 text-[18px]">
            {data.description
              ? data.description
              : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aperiam facilis velit inventore, dolorem accusamus ea hic ab beatae quod, fugiat similique laudantium. Modi quia dignissimos magni quisquam sunt culpa cupiditate corporis eius consequuntur! Culpa adipisci provident temporibus ."}
          </p>
        </div>
      </div>

      <div
        className="h-[520px] w-[520px] bg-gradient-to-br from-primary to-tertiary absolute -top-20 -right-20 max-xl:hidden"
        style={{ clipPath: "circle(50% at 50% 50%)" }}
      ></div>

      <img
        src={aboutImage.src}
        alt="hero"
        className="absolute top-10 right-0 max-xl:hidden"
      />

      {data.latestBlog && (
        <div className="flex flex-wrap md:pt-20">
          <div className="md:py-10  lg:pt-46 container mx-auto md:mt-20 md:px-0 relative w-full">
            <div className="w-full md:w-1/2 md:h-[300px] md:max-w-lg md:absolute md:right-0">
              <img
                src={`${backendURL.replace("/api", "")}${
                  data.latestBlog.imageUrl
                }`}
                alt="Latest Blog Image"
                className="w-full h-full rounded-[24px] object-cover "
              />
            </div>

            <div className="w-full md:w-1/2 mt-4 md:mt-0  md:left-12 lg:pr-32 sm:pt-5 space-y-4 md:space-y-8">
              <div className="md:ml-12 ">
                <p className="text-2xl pb-9 md:text-3xl font-bold text-center md:text-left">
                  {data.latestBlog.title.substring(0, 60)}
                </p>
                <p className="mt-4 pb-9 leading-7 text-lg text-center lg:pr-5 md:text-left">
                  {data.latestBlog.content.substring(0, 200)}
                </p>
                <div className="flex justify-center md:justify-start mt-6">
                  <Button className="rounded-lg w-32 h-10 mb-12">
                    <Link
                      href={`${routes.blogDetail.replace(
                        ":id",
                        data.latestBlog._id
                      )}`}
                    >
                      Read More
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogsHero;
