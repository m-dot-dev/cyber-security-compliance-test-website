"use client";
import FormInput from "@/components/common/FormInput";
import FormSelect from "@/components/common/FormSelect";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkValidations } from "@/constants/formValidation";
import { backendURL } from "@/constants/bankendURL";
import { useState } from "react";
import Question from "./Question";
import { iQuestion } from "@/lib/interfaces/question";

const getQuestions = (setQuestions: Function) => {
  fetch(`${backendURL}/questions`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setQuestions(data);
    })
    .catch((error) => {
      console.error("Error:", error);
      setQuestions([
        {
          question: "Error",
          heading: "Error",
          options: ["a", "c", "d"],
        },
        {
          question: "Error",
          heading: "Error",
          options: ["a", "c", "d"],
        },
        {
          question: "Error",
          heading: "Error",
          options: ["a", "c", "d"],
        },
        {
          question: "Error",
          heading: "Error",
          options: ["a", "c", "d"],
        },
      ]);
    });
};
const formSchema = z
  .object({
    //company info
    sector: z.string().min(2, "First Name must be at least 2 characters"),
    ABN: z.string().optional(),
    company_name: z.string().email("Invalid Email"),
    grant_id: z.string().optional(),
    years_in_operation: z.string().optional(),
    number_of_employees: z.string().optional(),
    annual_sales_turnover: z.string().optional(),

    // cyber security info
    digital_experts_in_your_sector: z.string().optional(),
    plan_for_digital_security: z.string().optional(),
    phishing_attack_score: z.string().optional(),
    ransomware_attack_score: z.string().optional(),
    zero_day_attack_score: z.string().optional(),
    xxs_attack_score: z.string().optional(),
    ddos_attack_score: z.string().optional(),
    data_breach_attack_score: z.string().optional(),
    dns_spoofing_attack_score: z.string().optional(),
    birthday_attack_score: z.string().optional(),
  })
  .refine((data) => {
    checkValidations(data);
    return true;
  });

const CyberSecurityComplianceForm = () => {
  const [questions, setQuestions] = useState([]);
  const onSubmit = () => {};
  getQuestions(setQuestions);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sector: "",
      ABN: "",
      company_name: "",
      grant_id: "",
      years_in_operation: "",
      number_of_employees: "",
      annual_sales_turnover: "",
      plan_for_digital_security: "",
      digital_experts_in_your_sector: "",
      phishing_attack_score: "",
      ransomware_attack_score: "",
      zero_day_attack_score: "",
      xxs_attack_score: "",
      ddos_attack_score: "",
      data_breach_attack_score: "",
      dns_spoofing_attack_score: "",
      birthday_attack_score: "",
    },
  });

  return (
    <div className="container p-8  max-md:p-4 flex flex-col bg-white mt-6 rounded-xl">
      <Form {...form}>
        <form
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          onSubmit={form.handleSubmit((data: any) => onSubmit(data))}
          className="w-full lg-container"
        >
          <div className="w-full ">
            <FormSelect
              form={form}
              name="passengers"
              label="Number of Passengers"
              placeHolder="Select Number of Passengers"
              className="max-md:w-full space-y-0.5 mb-1"
              data={[
                { label: "1 Passenger", value: "1" },
                { label: "2 Passengers", value: "2" },
                { label: "3 Passengers", value: "3" },
                { label: "4 Passengers", value: "4" },
                { label: "5 Passengers", value: "5" },
                { label: "6 Passengers", value: "6" },
              ]}
            />
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

            <FormSelect
              form={form}
              name="passengers"
              label="Number of Passengers"
              placeHolder="Select Number of Passengers"
              className="max-md:w-full space-y-0.5 mb-1"
              data={[
                { label: "1 Passenger", value: "1" },
                { label: "2 Passengers", value: "2" },
                { label: "3 Passengers", value: "3" },
                { label: "4 Passengers", value: "4" },
                { label: "5 Passengers", value: "5" },
                { label: "6 Passengers", value: "6" },
              ]}
            />
            <FormSelect
              form={form}
              name="luggage"
              label="Number of Luggages"
              placeHolder="Select Number of Luggages"
              className="max-md:w-full space-y-0.5 mb-1"
              data={[
                { label: "1 Bag", value: "1" },
                { label: "2 Bags", value: "2" },
                { label: "3 Bags", value: "3" },
                { label: "4 Bags", value: "4" },
                { label: "5 Bags", value: "5" },
                { label: "6 Bags", value: "6" },
              ]}
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
          {questions.map(
            ({ question, heading, options }: iQuestion, index: number) => (
              <Question
                key={index}
                question={question}
                heading={heading}
                options={options}
              />
            )
          )}
          <div className="flex justify-end gap-4 mt-8">
            <Button type="submit" variant={"default"} className="w-24">
              Next
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CyberSecurityComplianceForm;
