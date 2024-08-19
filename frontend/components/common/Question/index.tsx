import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { iQuestion } from "@/lib/interfaces/question";
import React from "react";

const Question = ({ heading, question, options }: iQuestion) => {
  return (
    <div className="pt-2">
      <h3 className="font-semibold text-primary">{heading}:</h3>
      <p>{question}</p>
      <ul>
        <RadioGroup>
          {options.map((option) => (
            <div className="flex items-center gap-x-2">
              <RadioGroupItem value={option} />
              <p>{option}</p>
            </div>
          ))}
        </RadioGroup>
      </ul>
    </div>
  );
};

export default Question;
