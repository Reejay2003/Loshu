"use client";

import { useState, useEffect } from "react";
import { calculateNameNumber, calculateLifePath, generateLoshuGrid } from "@/lib/numerology";
import InputForm from "@/components/ui/InputForm";
import NumerologyTable from "@/components/ui/NumerologyTable";
import Analysis from "@/components/ui/Analysis";

export default function Home() {
  const [result, setResult] = useState<{
    nameNumber: number;
    lifePath: number;
    radix: number;
    loshuGrid: Record<number, number[]>;
  } | null>(null);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCalculate = (name: string, dob: string) => {
    const nameNumber = calculateNameNumber(name);
    const lifePath = calculateLifePath(dob);
    const radix = calculateLifePath(dob);

    const loshuGrid = generateLoshuGrid(dob, nameNumber, lifePath, radix);

    setResult({ nameNumber, lifePath, radix, loshuGrid });
  };

  if (!isClient) return null; // Prevent hydration error

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Loshu Numerology Calculator</h1>
      <div className="flex space-x-8">
        <div className="flex flex-col space-y-6 w-1/2">
          <InputForm onCalculate={handleCalculate} />
          {result && <NumerologyTable {...result} />}
        </div>

        <div className="w-1/2">
          {result && <Analysis loshuGrid={result.loshuGrid} />}
        </div>
      </div>
    </div>
  );
}
