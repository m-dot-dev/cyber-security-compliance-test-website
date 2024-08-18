import "react-phone-number-input/style.css";
// import "./PhoneNumber.module.css";

import { cn } from "@/lib/utils";
import { useEffect } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { Label } from "../ui/label";

const PhoneNumberInput = ({
  form,
  setIsValid,
  // showError,
  styles,
  labelClassName,
}: any) => {
  useEffect(() => {
    setIsValid(
      form.getValues().phone_number
        ? isValidPhoneNumber(form.getValues().phone_number)
        : false
    );
  }, [form.getValues().phone_number]);

  return (
    <div>
      <Label
        className={cn("", labelClassName)}
        // style={{
        // color: form.getValues().phone_number
        //   ? isValidPhoneNumber(form.getValues().phone_number) && !showError
        //     ? labelClassName
        //     : "red"
        //   : labelClassName,
        // }}
      >
        Phone Number
      </Label>

      <PhoneInput
        placeholder="Enter phone number"
        style={styles}
        className="customClass"
        defaultCountry="US"
        value={
          form.getValues().phone_number ? form.getValues().phone_number : ""
        }
        onChange={(value) => {
          form.setValue("phone_number", value);
        }}
        error={
          form.watch("phone_number")
            ? isValidPhoneNumber(form.getValues().phone_number)
              ? undefined
              : "Invalid phone number"
            : "Phone number required"
        }
      />
      <Label
        className="text-sm font-medium"
        style={{
          color: form.getValues().phone_number
            ? isValidPhoneNumber(form.getValues().phone_number)
              ? "green"
              : "red"
            : "black",
        }}
      >
        {form.getValues().phone_number &&
          !isValidPhoneNumber(form.getValues().phone_number) &&
          "Invalid Phone Number"}
      </Label>
    </div>
  );
};

export default PhoneNumberInput;
