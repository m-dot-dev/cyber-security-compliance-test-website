"use client";
import FormDateTime from "@/components/common/FormDateTime";
import FormInput from "@/components/common/FormInput";
import FormSelect from "@/components/common/FormSelect";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import moment from "moment";
import { useState } from "react";
import { toast } from "sonner";
import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";
import GoogleMapAutoComplete from "./GoogleMapAutoComplete";
import PhoneNumberInput from "./PhoneNumberInput";

const BookingForm = ({
  form,
  setActiveStep,
  setDisabledStep,
}: {
  form: any;
  setActiveStep: any;
  setDisabledStep: any;
}) => {
  const [isValid, setIsValid] = useState(false);
  const onSubmit = () => {
    localStorage &&
      localStorage.setItem(
        "bookingDetails",
        JSON.stringify({ ...form.getValues(), activeStep: 3 })
      );
    if (isValid) {
      setActiveStep(3);
      setDisabledStep(3);
    } else if (!isValid) {
      toast.error("Please enter a valid phone number");
    }
  };
  return (
    <div className="container p-8  max-md:p-4 flex flex-col bg-white mt-6 rounded-xl">
      <Form {...form}>
        <form
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          onSubmit={form.handleSubmit((data: any) => onSubmit(data))}
          className="w-full lg-container"
        >
          <div className="w-full md:grid grid-cols-2 gap-4">
            <FormInput
              form={form}
              name="firstname"
              label="First Name"
              placeHolder="Enter First Name"
              className="max-md:w-full space-y-0.5 mb-1 bg-transparent"
            />
            <FormInput
              form={form}
              name="lastname"
              label="Last Name"
              placeHolder="Enter Last Name"
              className="max-md:w-full space-y-0.5 mb-1 bg-transparent "
            />
            <FormInput
              form={form}
              name="email"
              label="Email"
              placeHolder="Enter Email"
              className="max-md:w-full space-y-0.5 mb-1 bg-transparent"
            />
            <div
              style={{
                marginTop: "2px",
              }}
            >
              <PhoneNumberInput
                form={form}
                setIsValid={setIsValid}
                labelClassName="font-semibold mb-4"
                styles={{
                  width: "100%",
                  height: "36px",
                  border: "1px solid #E5E5E5",
                  borderRadius: "6px",
                  padding: "0.5rem",
                  name: "phone_number",
                  marginTop: "2px",
                }}
              />
            </div>
            {form.watch("bookingType") !== "multiple" &&
              form.watch("bookingType") !== "time_based" && (
                <GoogleMapAutoComplete
                  form={form}
                  airportOnly={Boolean(form.watch("bookingType") === "from")}
                  name="pickupPoint"
                  label="Pick up Location"
                  placeHolder="Enter Pick up Location"
                  className="max-md:w-full space-y-0.5 mb-1 bg-transparent"
                />
              )}
            {form.watch("bookingType") !== "time_based" &&
              form.watch("bookingType") !== "multiple" && (
                <GoogleMapAutoComplete
                  airportOnly={Boolean(form.watch("bookingType") === "to")}
                  form={form}
                  name="dropoffPoint"
                  label="Drop off Location"
                  placeHolder="Enter Drop off Location"
                  className="max-md:w-full space-y-0.5 mb-1 bg-transparent"
                />
                // <FormInput
                //   form={form}
                //   name="dropoffPoint"
                //   label="Drop off Location"
                //   placeHolder="Enter Drop off Location"
                //   className="max-md:w-full space-y-0.5 mb-1 bg-transparen"
                // />
              )}

            {form.getValues("bookingType") !== "to" && (
              <FormDateTime
                form={form}
                name="pickupTime"
                label="Pick up Time"
                placeHolder="Enter Pick up Time"
                min={moment().add(60, "minutes").format().slice(0, 16)}
                className="max-md:w-full space-y-0.5 mb-1 bg-transparent"
                max={moment().add(1, "years").format().slice(0, 16)}
                onChange={(e: string) => {
                  const pickupString = e.replace("T", " ");
                  const dropoffString = form
                    .getValues()
                    .dropoffTime?.replace("T", " ");

                  const selectedDate = moment(pickupString);
                  const min = moment().add(60, "minutes");
                  const max = moment().add(1, "years");

                  if (selectedDate.isBefore(min)) {
                    // create error for field
                    form.setError("pickupTime", {
                      type: "custom",
                      message: `Must be greater than ${min.format(
                        "DD/MM/yy hh:mmA"
                      )}`,
                    });
                  } else if (selectedDate.isAfter(max)) {
                    form.setError("pickupTime", {
                      type: "custom",
                      message: `Must be less than ${max.format("DD/MM/yy")}`,
                    });
                  } else {
                    form.clearErrors("pickupTime");
                  }
                  if (dropoffString) {
                    const dropOffDate = moment(dropoffString);
                    if (selectedDate.isAfter(dropOffDate)) {
                      form.setError("dropoffTime", {
                        type: "custom",
                        message: `Must be greater than pickup time`,
                      });
                    } else if (
                      dropOffDate.isAfter(moment(selectedDate).add(25, "hours"))
                    ) {
                      form.setError("dropoffTime", {
                        type: "custom",
                        message: `Must be within 24 hours from pickup`,
                      });
                    } else {
                      form.clearErrors("dropoffTime");
                    }
                  }
                }}
              />
            )}

            {form.getValues("bookingType") !== "point" &&
              form.getValues("bookingType") !== "from" && (
                <FormDateTime
                  form={form}
                  name="dropoffTime"
                  label="Drop off Time"
                  placeHolder="Enter Drop off Time"
                  // min={form.getValues("pickupTime")}
                  // max={
                  //   form.getValues().bookingType !== "multiple" &&
                  //   calculateNext24HoursFromDate(form.getValues("pickupTime"))
                  // }
                  className="max-md:w-full space-y-0.5 mb-1 bg-transparent"
                  min={
                    (form.watch("pickupTime") &&
                      moment(form.watch("pickupTime"))
                        .add(30, "minutes")
                        .format()
                        .slice(0, 16)) ||
                    moment().add(60, "minutes").format().slice(0, 16)
                  }
                  max={
                    (form.watch("bookingType") !== "multiple" &&
                      form.watch("pickupTime") &&
                      moment(form.watch("pickupTime"))
                        .add(25, "hours")
                        .format()
                        .slice(0, 16)) ||
                    moment().add(1, "years").format().slice(0, 16)
                  }
                  onChange={(e: string) => {
                    const pickupString = form
                      .getValues()
                      .pickupTime?.replace("T", " ");
                    const dropoffString = e.replace("T", " ");

                    const selectedDate = moment(dropoffString);
                    const min = moment(pickupString).add(30, "minutes");
                    const max = moment(pickupString).add(25, "hours");

                    if (selectedDate.isBefore(min)) {
                      // create error for field
                      form.setError("dropoffTime", {
                        type: "custom",
                        message: `Must be greater than ${min.format(
                          "DD/MM/yy hh:mmA"
                        )}`,
                      });
                    } else if (selectedDate.isAfter(max)) {
                      form.setError("dropoffTime", {
                        type: "custom",
                        message: `Must be less than ${max.format(
                          "DD/MM/yy hh:mmA"
                        )}`,
                      });
                    } else {
                      form.clearErrors("dropoffTime");
                    }
                  }}
                />
              )}

            <FormSelect
              form={form}
              name="passengers"
              label="Number of Passengers"
              placeHolder="Select Number of Passengers"
              className="max-md:w-full space-y-0.5 mb-1"
              data={
                form.watch("vehicle") === "black_Sedan"
                  ? [
                      { label: "1 Passenger", value: "1" },
                      { label: "2 Passengers", value: "2" },
                      { label: "3 Passengers", value: "3" },
                    ]
                  : [
                      { label: "1 Passenger", value: "1" },
                      { label: "2 Passengers", value: "2" },
                      { label: "3 Passengers", value: "3" },
                      { label: "4 Passengers", value: "4" },
                      { label: "5 Passengers", value: "5" },
                      { label: "6 Passengers", value: "6" },
                    ]
              }
            />
            <FormSelect
              form={form}
              name="luggage"
              label="Number of Luggages"
              placeHolder="Select Number of Luggages"
              className="max-md:w-full space-y-0.5 mb-1"
              data={
                form.watch("vehicle") === "black_Sedan"
                  ? [
                      { label: "1 Bag", value: "1" },
                      { label: "2 Bags", value: "2" },
                      { label: "3 Bags", value: "3" },
                    ]
                  : [
                      { label: "1 Bag", value: "1" },
                      { label: "2 Bags", value: "2" },
                      { label: "3 Bags", value: "3" },
                      { label: "4 Bags", value: "4" },
                      { label: "5 Bags", value: "5" },
                      { label: "6 Bags", value: "6" },
                    ]
              }
            />
            <FormSelect
              form={form}
              name="babySeats"
              label="Number of Baby Seats"
              placeHolder="Select Number of Baby Seats"
              className="max-md:w-full space-y-0.5 mb-1"
              data={[
                { label: "None", value: "0" },
                { label: "1 seat", value: "1" },
                { label: "2 seats", value: "2" },
                { label: "3 seats", value: "3" },
              ]}
            />
          </div>
          <Separator className="mb-8 mt-10" />
          <FormInput
            form={form}
            label="Additional Notes"
            name="notes"
            className="w-full space-y-0.5"
            component={
              <Textarea
                placeholder="Write Here"
                className="min-h-28 bg-transparent placeholder:text-white"
              />
            }
          />
          <div className="flex justify-end gap-4 mt-8">
            <Button
              type="button"
              variant={"outline"}
              className="text-secondary w-24 bg-none bg-transparent border-secondary"
              onClick={() => {
                setActiveStep(1);
              }}
            >
              Back
            </Button>
            <Button type="submit" variant={"default"} className="w-24">
              Next
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default BookingForm;
