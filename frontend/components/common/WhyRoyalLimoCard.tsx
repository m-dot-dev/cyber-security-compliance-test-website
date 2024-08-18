const WhyRoyalLimoCard = ({
  why,
}: {
  why: {
    name: string;
    image: string;
    description: string;
  };
}) => {
  return (
    <div className="w-[380px]  flex flex-col items-center text-center gap-4 z-10">
      <img
        src={why.image}
        alt={why.name}
        className="w-full h-56 object-cover rounded-3xl"
      />

      <p className="text-xl font-medium">{why.name}</p>

      <p className="text-sm font-normal">{why.description}</p>
    </div>
  );
};

export default WhyRoyalLimoCard;
