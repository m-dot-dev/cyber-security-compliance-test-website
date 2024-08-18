"use client";
import FeaturedBlogsCard from "@/components/common/FeaturedBlogsCard";
import { FeaturedBlogsContent } from "@/constants/seoContent";

const FeaturedBlogs = () => {
  return (
    <div className="flex flex-col ">
      <div className="py-3 relative bg-white">
        <div className="container ">
          <div className="flex flex-col items-center justify-center text-center gap-4 mt-6 ">
            <h1 className="text-3xl mb-4 text-yellow-600 font-semibold">
              {FeaturedBlogsContent[0].heading}
            </h1>
            <p className="opacity-65 max-w-[40rem] text-base lg:text-md leading-8 px-4">
              {FeaturedBlogsContent[0].description}
            </p>
          </div>
        </div>
      </div>
      <FeaturedBlogsCard />
    </div>
  );
};

export default FeaturedBlogs;
