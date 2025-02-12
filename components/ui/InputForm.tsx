"use client";

import { useState } from "react";

interface InputFormProps {
  onCalculate: (name: string, dob: string) => void;
}

export default function InputForm({ onCalculate }: InputFormProps) {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(name, dob);
    setSubmitted(true); // Hide form after submission
  };

  if (submitted) {
    return null; // Hide the form completely after submission
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="border p-2 rounded-md w-64"
        />
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="border p-2 rounded-md w-64"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md mt-4 w-64"
        >
          Calculate
        </button>
      </form>
    </div>
  );
}
