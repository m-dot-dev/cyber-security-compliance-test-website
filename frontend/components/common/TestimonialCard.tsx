import { ChevronDown, Star } from "lucide-react";

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: {
    name: string;
    rating: number;
    description: string;
    image: string;
  };
}) => {
  return (
    <div className="flex flex-col items-center my-4">
      <div className="shadow-2xl text-center p-8 rounded-xl h-96 bg-white">
        <div className=" w-80 max-md:w-60 space-y-4">
          <h1 className="text-xl font-medium">{testimonial.name}</h1>
          <div className="flex gap-1 items-center justify-center">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <Star
                  key={index}
                  color={index < testimonial.rating ? "#FFD700" : "#D3D3D3"}
                  fill={index < testimonial.rating ? "#FFD700" : "#D3D3D3"}
                />
              ))}
          </div>
          <h2 className="font-normal text-md">{testimonial.description}</h2>
        </div>
      </div>
      <ChevronDown size={200} color="white" fill="white" className="-mt-24 " />
      <img
        src={testimonial.image}
        alt="testimonial"
        className="rounded-full w-16 h-16 -mt-10"
      />
    </div>
  );
};

export default TestimonialCard;
