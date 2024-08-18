import { Check } from "lucide-react";

const BookingTypeCard = ({
  bookingType,
  form,
  setActiveStep,
  setDisabledStep,
}: {
  bookingType: {
    value: string;
    name: string;
    description: string;
  };
  form: any;
  setActiveStep: any;
  setDisabledStep: any;
}) => {
  return (
    <div
      className={`shadow-md rounded-xl h-40 p-4 w-96 max-lg:w-72  my-2 gap-3 cursor-pointer ${
        form.watch("bookingType") === bookingType?.value
          ? "bg-secondary text-primary-foreground"
          : "bg-white text-secondary"
      }`}
      onClick={() => {
        form.setValue("bookingType", bookingType?.value);
        setActiveStep(1);
        setDisabledStep(1);
      }}
    >
      <div className="flex justify-between items-center">
        <p className="text-xl font-medium">{bookingType?.name}</p>
        {form.watch("bookingType") !== bookingType?.value ? (
          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
        ) : (
          <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
            <Check size={24} color="black" />
          </div>
        )}
      </div>
      <p className="text-sm font-normal mt-4">{bookingType?.description}</p>
    </div>
  );
};

export default BookingTypeCard;
