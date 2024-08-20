import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { iQuestion } from "@/lib/interfaces/question";
import React from "react";

const Question = ({
  heading,
  question,
  answers,
  index,
}: iQuestion & { index: number }) => {
  return (
    <div className="pt-6">
      <h3 className="font-semibold text-primary">
        {index + 1}: {heading}:
      </h3>
      <p className="pb-2">{question}</p>
      <ul>
        <RadioGroup>
          {answers.map(({ answer }) => (
            <div className="flex items-center gap-x-2">
              <RadioGroupItem id={answer} value={answer} />
            </div>
          ))}
        </RadioGroup>
      </ul>
    </div>
  );
};

export default Question;
