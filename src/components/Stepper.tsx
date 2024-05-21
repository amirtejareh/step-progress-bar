import React, { useState } from "react";

interface IStepper {
  numbers: number;
}
const Stepper = ({ numbers }: IStepper) => {
  const [step, setStep] = useState<any>(0);
  return (
    <div className="flex gap-[3.5rem] container first:ml-[2.5rem]">
      {Array.from(Array(numbers).keys()).map((number: number) => {
        return (
          <div
            onClick={() => {
              if (step + 1 === number) setStep(number);
            }}
            className="relative my-[2.5rem]"
          >
            {step === number ? (
              <>
                <div
                  className={`${
                    step + 1 === number && "cursor-pointer"
                  } flex border-[#fff] border-[1.5px]  items-center justify-center relative w-16 h-16 bg-[#292828] rounded-[50%] top-[0.3125rem]`}
                >
                  <div className="text-white">{number + 1}</div>
                </div>
                {number + 1 != numbers && (
                  <div className="w-[4rem] h-[0.3125rem] bg-[#CEC1B2] absolute top-[2.2rem] left-[4rem]"></div>
                )}
              </>
            ) : number + 1 <= step + 1 ? (
              <>
                <div className=" border-[#000] border-[1.5px] inline-block relative w-16 h-16 bg-[#00b046] rotate-45 rounded-[50%] top-[0.3125rem];">
                  <div className="absolute w-[0.1875rem] h-[1.875rem] bg-white rounded-[0.3125rem_0.3125rem_0_0] left-[2.125rem] top-[0.6875rem]"></div>
                  <div className="absolute w-[0.9375rem] h-[0.1875rem] bg-white rounded-[0.3125rem_0_0_0.3125rem] left-5 top-[2.375rem]"></div>
                </div>
                {number + 1 != numbers && (
                  <div className="w-[4rem] h-[0.3125rem] bg-[#00B046] absolute top-[2.2rem] left-[4rem]"></div>
                )}
              </>
            ) : (
              <>
                <div
                  className={`${
                    step + 1 === number && "cursor-pointer"
                  } flex  border-[#000] border-[1.5px] disabled:opacity-10  items-center justify-center relative w-16 h-16 bg-white rounded-[50%] top-[0.3125rem]`}
                >
                  <div className="text-black">{number + 1}</div>
                </div>
                {number + 1 != numbers && (
                  <div className="w-[4rem] h-[0.3125rem] bg-[#CEC1B2] absolute top-[2.2rem] left-[4rem]"></div>
                )}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
