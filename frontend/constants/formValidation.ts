import { z } from "zod";

export const checkValidations = (data: any) => {
  const errors: z.ZodIssue[] = [];
  if (data.bookingType === "time_based") {
    if (!data.pickupTime) {
      errors.push({
        code: "custom",
        path: ["pickupTime"],
        message: "Pick up time is required",
      });
    }

    if (!data.dropoffTime) {
      errors.push({
        code: "custom",
        path: ["dropoffTime"],
        message: "Drop off time is required",
      });
    }
  }
  if (data.bookingType === "point") {
    if (!data.pickupPoint) {
      errors.push({
        code: "custom",
        path: ["pickupPoint"],
        message: "Pick up location is required",
      });
    }

    if (!data.dropoffPoint) {
      errors.push({
        code: "custom",
        path: ["dropoffPoint"],
        message: "Drop off location is required",
      });
    }
    if (!data.pickupTime) {
      errors.push({
        code: "custom",
        path: ["pickupTime"],
        message: "Pick up date is required",
      });
    }
  }

  if (data.bookingType === "to") {
    // if (!data.pickupPoint) {
    //   errors.push({
    //     code: "custom",
    //     path: ["pickupPoint"],
    //     message: "Pick up location is required",
    //   });
    // }

    // if (!data.dropoffPoint) {
    //   errors.push({
    //     code: "custom",
    //     path: ["dropoffPoint"],
    //     message: "Drop off location is required",
    //   });
    // }
    if (!data.dropoffTime) {
      errors.push({
        code: "custom",
        path: ["dropoffTime"],
        message: "Pick up time is required",
      });
    }
  }
  if (data.bookingType === "from") {
    // if (!data.pickupPoint) {
    //   errors.push({
    //     code: "custom",
    //     path: ["pickupPoint"],
    //     message: "Pick up location is required",
    //   });
    // }

    // if (!data.dropoffPoint) {
    //   errors.push({
    //     code: "custom",
    //     path: ["dropoffPoint"],
    //     message: "Drop off location is required",
    //   });
    // }
    if (!data.pickupTime) {
      errors.push({
        code: "custom",
        path: ["pickupTime"],
        message: "Pick up time is required",
      });
    }
  }
  if (data.bookingType === "multiple") {
    if (!data.pickupTime) {
      errors.push({
        code: "custom",
        path: ["pickupTime"],
        message: "Pick up date is required",
      });
    }
    if (!data.dropoffTime) {
      errors.push({
        code: "custom",
        path: ["dropoffTime"],
        message: "Return date is required",
      });
    }
  }

  if (errors.length > 0) {
    throw new z.ZodError(errors);
  }

  return true;
};
