'use client';
import { backendURL } from "@/constants/bankendURL";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { toast } from "sonner";
import { Button } from "../ui/button";
import Loader from "./Loader";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
} from "../ui/alert-dialog";

const OTPVerificationModal = ({
  token,
  closeOTPModal,
  setCloseOTPModal,
}: {
  token: string;

  closeOTPModal: boolean;
  setCloseOTPModal: any;
}) => {
  const [otp, setOtp] = useState("");
  const onSubmit = () => {
    const resData = axios.post(
      `${backendURL}`,
      {
        code: otp,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return resData;
  };
  const { mutateAsync: verifyOTPMutation, isPending } = useMutation({
    mutationFn: onSubmit,
    onError: (error: { response: { data: { errors: string } } }) => {
      toast.error("Error", {
        description: error?.response?.data?.errors,
      });
    },
    onSuccess: () => {
      toast.success("OTP Accepted", {
        description: "OTP accepted successfully.",
      });
      setCloseOTPModal(false);
    },
  });

  return (
    <AlertDialog
      open={closeOTPModal}
      onOpenChange={(value: boolean) => {
        setCloseOTPModal(value);
      }}
    >
      <AlertDialogContent className="flex flex-col items-center justify-center">
        <AlertDialogHeader>Enter OTP</AlertDialogHeader>
        <div className="flex-col justify-center items-center flex w-full">
          <Loader isLoading={isPending} />
          <OTPInput
            // renderSeparator={<span></span>}
            // render Separator should be a space
            renderSeparator={<span className="mx-2"></span>}
            renderInput={(props) => <input {...props} />}
            value={otp}
            onChange={(code) => {
              setOtp(code);
            }}
            numInputs={6}
            inputStyle="h-12 w-12 border-2 border-[#E5E5E5] rounded-md text-center text-2xl font-[500] text-[#333333] focus:outline-none focus:border-[#FBBF24]"
            skipDefaultStyles
          />
        </div>
        <Button
          className="w-3/4"
          onClick={() => {
            verifyOTPMutation();
          }}
        >
          Send
        </Button>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default OTPVerificationModal;
