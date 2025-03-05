import React from "react";

const Instructions = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-800 text-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">How to Solve a Rubik's Cube</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Step 1: Solve the white cross.</li>
        <li>Step 2: Solve the white corners.</li>
        <li>Step 3: Solve the middle layer edges.</li>
        <li>Step 4: Solve the yellow cross.</li>
        <li>Step 5: Position the yellow corners.</li>
        <li>Step 6: Orient the yellow corners.</li>
        <li>Step 7: Position the last layer edges.</li>
      </ol>
    </div>
  );
};

export default Instructions;
