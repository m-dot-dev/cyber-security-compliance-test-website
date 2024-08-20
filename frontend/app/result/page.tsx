"use client";
import CircleWithMarks from "@/components/common/CircleWithMarks";
import Response from "@/components/common/Response";
import { backendURL } from "@/constants/bankendURL";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const getResponse = (setResponse: Function, user_email: string | null) => {
  // if (!user_email) return;
  fetch(`${backendURL}/questions/result/${user_email}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(({ data }) => {
      setResponse(data);
      // make all these fields required
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const CyberSecurityComplianceResponse = () => {
  const searchParams = useSearchParams();
  const user_email_params = searchParams.get("user_email");
  const [response, setResponse] = useState({});
  //@ts-ignore
  const { user_email, total_score, user_score, result = [] } = response || {};
  response;

  useEffect(() => {
    getResponse(setResponse, user_email_params);
  }, []);

  if (response === null) return <h2>Not Found!</h2>;
  return (
    <div className="container p-8  max-md:p-4 flex flex-col bg-white mt-6 rounded-xl">
      <h2 className="text-lg capitalize font-semibold text-center mb-4">
        Your Cyber Security Compliance Result has also been dispatched to your
        email <Link href={`mailto:${user_email}`}>{user_email}</Link>
      </h2>
      <CircleWithMarks total_score={total_score} user_score={user_score} />
      <div className="w-full lg-container">
        {result.map(
          (
            {
              heading,
              response,
            }: { _id: string; heading: string; response: string },
            index: string
          ) => (
            <Response heading={heading} response={response} index={index} />
          )
        )}
      </div>
    </div>
  );
};

export default CyberSecurityComplianceResponse;
