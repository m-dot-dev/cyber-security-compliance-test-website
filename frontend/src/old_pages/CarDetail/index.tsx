import FleetHero from "@/components/common/FleetHero";
import FleetsCard from "@/components/common/FleetsCard";

interface Car {
  title: string;
  fleetDescription: string;
  fleetColor: string;
  fleetCapacity: string;
  fleetImage: string;
}

const CarDetail = ({ car }: { car: Car }) => {
  return (
    <div className="max-lg:py-10 mb-10">
      <FleetHero
        data={{
          title: car.title,
          description: car.fleetDescription,
          color: car.fleetColor,
          capacity: car.fleetCapacity,
          image: car.fleetImage,
        }}
      />
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <div className="flex justify-center">
          <FleetsCard data={car} />
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
