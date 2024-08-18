import { ChevronRight } from "lucide-react";

const WhyRoyalLimoCardAboutUs = ({
  why,
}: {
  why: {
    name: string;
    image: string;
    description: string;
  };
}) => {
  return (
    <div className="w-[320px] h-[21rem] flex flex-col bg-white shadow-lg justify-between gap-4 p-8 text-secondary rounded-3xl">
      <p className="text-2xl font-medium">{why.name}</p>
      <p className="text-sm font-normal">{why.description}</p>
      <ChevronRight className="h-8 w-8" />
    </div>
  );
};

export default WhyRoyalLimoCardAboutUs;
