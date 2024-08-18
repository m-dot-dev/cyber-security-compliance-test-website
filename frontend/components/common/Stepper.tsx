import { ChevronLeft, ChevronUp } from "lucide-react";
import { Separator } from "../ui/separator";

interface StepperProps {
  steps: string[];
  activeStep: number;
  setActiveStep: (step: number) => void;
  disabled: number;
}

const Stepper = ({
  steps,
  activeStep,
  setActiveStep,
  disabled,
}: StepperProps) => {
  return (
    <div className="md:flex max-md:flex-col max-md:items-center md:justify-center">
      {steps.map((step, index) => (
        <div className="md:flex" key={index}>
          <div className="flex md:flex-col md:items-center md:justify-center">
            <div
              className={`flex items-center justify-between md:px-8 ${
                disabled >= index + 1 ? "cursor-pointer" : "cursor-not-allowed"
              } ${disabled < index + 1 && "opacity-50"}`}
            >
              <div
                onClick={() => {
                  disabled >= index + 1 && setActiveStep(index + 1);
                }}
                key={index}
                className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  activeStep === index + 1
                    ? "bg-primary text-white"
                    : activeStep > index + 1
                    ? "bg-secondary"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                <div
                  className={`rounded-full w-6 h-6 flex items-center justify-center ${"bg-gray-200"}`}
                >
                  <p
                    className={`
                    ${activeStep === index + 1 && "text-primary"}`}
                  >
                    {activeStep > index + 1 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="black"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`flex md:flex-col items-center ${
                disabled < index + 1 && "opacity-50"
              }`}
            >
              <ChevronUp
                size={18}
                className="text-secondary -mb-1 max-md:hidden"
                strokeWidth={5}
              />
              <ChevronLeft
                size={18}
                className="text-secondary md:hidden"
                strokeWidth={5}
              />
              <p
                className={`text-xs rounded-full px-3 py-1   ${
                  activeStep === index + 1 ? "text-primary" : "text-secondary"
                }`}
              >
                {step}
              </p>
            </div>
          </div>
          {index !== steps.length - 1 ? (
            <Separator
              className={`w-2 h-4 md:h-2 lg:w-40 md:w-10 bg-gray-200 md:mt-5 max-md:ml-4 ${
                activeStep > index ? "bg-primary" : "bg-secondary"
              }`}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
