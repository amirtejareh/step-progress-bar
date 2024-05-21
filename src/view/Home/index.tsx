import React from "react";
import Stepper from "./../../../src/components/Stepper";
const Home = () => {
  return (
    <div className="flex items-center justify-center  px-[14.25rem] py-[9.06rem] bg-black w-full h-screen ">
      <div
        className="w-[39rem] h-[9rem] rounded-[1rem] border-black border-[1px]
                bg-[#FFE3C2] font-[Inter] text-[1.625rem] font-[500]"
      >
        <Stepper numbers={5} />
      </div>
    </div>
  );
};

export default Home;
