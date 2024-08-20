"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { backendURL } from "@/constants/bankendURL";
import { iQuestion } from "@/lib/interfaces/question";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import InfoDialog from "../InfoDialog";
import Question from "../Question";
import { useRouter } from "next/navigation";
const getQuestions = (setQuestions: Function) => {
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
  const [openDialog, setOpenDialog] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const onSubmit = () => {
    setOpenDialog(true);
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  useEffect(() => {
    getQuestions(setQuestions);
  }, []);
  const router = useRouter();

  const onEmailSubmit = (email: string) => {
    // @ts-ignore
    answers.email = email;
    console.log(answers);
    const answersWithoutEmail = { ...answers };
    // @ts-ignore
    delete answersWithoutEmail.email;
    if (Object.keys(answersWithoutEmail).length === questions.length) {
      fetch(`${backendURL}/questions/result`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(answers),
      })
        .then((res) => {
          console.log(res);
          router.push(`/result?user_email=${email}`, { scroll: false });
        })
        .catch((err) => console.log(err));
    } else {
      toast.error("Please answer all questions to continue", {
        duration: 3000,
        description: "Please answer all questions to continue",
      });
    }
  };

  return (
    <div className="container p-8  max-md:p-4 flex flex-col bg-white mt-6 rounded-xl">
      <InfoDialog
        isOpen={openDialog}
        setIsOpen={setOpenDialog}
        title="Enter you email"
        description="Enter your email to get your results"
        submitAnswers={onEmailSubmit}
      />
      <Form {...form}>
        <form
          //@ts-ignore
          onSubmit={form.handleSubmit((data: any) => onSubmit(data))}
          className="w-full lg-container"
        >
          {questions.map(
            ({ _id, question, heading, answers }: iQuestion, index: number) => (
              <Question
                key={index}
                setAnswers={setAnswers}
                _id={_id as string}
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
