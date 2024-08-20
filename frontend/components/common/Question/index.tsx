import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { iQuestion } from "@/lib/interfaces/question";
import React from "react";

const Question = ({
  heading,
  question,
  answers,
  index,
  setAnswers,
  _id,
}: iQuestion & { index: number; setAnswers: Function; _id: string }) => {
  return (
    <div className="pt-6">
      <h3 className="font-semibold text-primary">
        {index + 1}: {heading}:
      </h3>
      <p className="pb-2">{question}</p>
      <ul>
        <RadioGroup
          onValueChange={(answer) => {
            setAnswers((prev: any) => {
              return {
                ...prev,
                [_id]: answer,
              };
            });
          }}
        >
          {answers.map(({ answer }, index) => {
            const id = question + index;
            return (
              <div className="flex items-center gap-x-2" key={id}>
                <RadioGroupItem id={id} value={answer}>
                  {answer}
                </RadioGroupItem>
              </div>
            );
          })}
        </RadioGroup>
      </ul>
    </div>
  );
};

export default Question;
