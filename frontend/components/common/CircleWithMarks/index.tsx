import React from "react";

const CircleWithText = ({
  total_score,
  user_score,
}: {
  total_score: number;
  user_score: number;
}) => {
  if (!total_score || !user_score) return null;
  return (
    <div className="flex justify-center items-center gap-5">
      <h2 className="text-xl">Your Cyber Security Compliance Score is</h2>
      <div
        className="flex justify-center items-center bg-blue-500 text-white font-bold rounded-full"
        style={{ width: "100px", height: "100px" }}
      >
        {`${user_score}/${total_score}`}
      </div>
    </div>
  );
};

export default CircleWithText;
