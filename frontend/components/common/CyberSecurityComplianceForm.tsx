"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { backendURL } from "@/constants/bankendURL";
import { iQuestion } from "@/lib/interfaces/question";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Question from "./Question";
import { toast } from "sonner";

const getQuestions = (setQuestions: Function, form: any) => {
  fetch(`${backendURL}/questions`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(({ data }) => {
      console.log(data);
      setQuestions(data);
      form.reset();
      // make all these fields required
      form.regi;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
const formSchema = z.object({
  // //company info
  // sector: z.string().min(2, "First Name must be at least 2 characters"),
  // ABN: z.string().optional(),
  // company_name: z.string().email("Invalid Email"),
  // grant_id: z.string().optional(),
  // years_in_operation: z.string().optional(),
  // number_of_employees: z.string().optional(),
  // annual_sales_turnover: z.string().optional(),
});

const CyberSecurityComplianceForm = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const onSubmit = () => {
    if (Object.keys(answers).length === questions.length) {
      console.log(answers);
    } else {
      toast.error("Please answer all questions to continue", {
        duration: 3000,
        description: "Please answer all questions to continue",
      });
    }
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  useEffect(() => {
    getQuestions(setQuestions, form);
  }, []);

  return (
    <div className="container p-8  max-md:p-4 flex flex-col bg-white mt-6 rounded-xl">
      <Form {...form}>
        <form
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          onSubmit={form.handleSubmit((data: any) => onSubmit(data))}
          className="w-full lg-container"
        >
          {/* <div className="w-full ">
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
          <Separator className="mb-8 mt-10" /> */}
          {questions.map(
            ({ _id, question, heading, answers }: iQuestion, index: number) => (
              <Question
                key={index}
                setAnswers={setAnswers}
                _id={_id}
                index={index}
                question={question}
                heading={heading}
                answers={answers}
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
