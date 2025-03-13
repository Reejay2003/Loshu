// import _ from "lodash";

// Function to calculate numerology number from name
export function calculateNameNumber(name: string): number {
  const letterValues: Record<string, number> = {
    A: 1, B: 2, C: 3, D: 4, E: 5, U: 6, O: 7, P: 8,
    J: 1, K: 2, G: 3, M: 4, H: 5, V: 6, Z: 7, F: 8,
    I: 1, R: 2, L: 3, T: 4, N: 5, W: 6,
    Q: 1,       S: 3,       X: 5,
    Y: 1,
  };

  const sum = name.toUpperCase().split("").reduce((acc, char) => {
    return acc + (letterValues[char] || 0);
  }, 0);

  return reduceToSingleDigit(sum);
}

// Function to calculate life path number from DOB
export function calculateLifePath(dob: string): number {
  const digits = dob.replace(/-/g, "").split("").map(Number);
  return reduceToSingleDigit(digits.reduce((a, b) => a + b, 0));
}

// Function to calculate the radix number from DOB
export function calculateDayNumber(dob: string): number {
    const day = parseInt(dob.split("-")[2], 10); // Extract day part
    return reduceToSingleDigit(day);
  }
  

// Helper function to reduce to single digit
function reduceToSingleDigit(num: number): number {
  while (num > 9) {
    num = num.toString().split("").reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  return num;
}

// Generate Loshu Grid
export function generateLoshuGrid(dob: string, nameNumber: number, lifePath: number, radix: number): Record<number, number[]> {
  // Start by creating the grid from the DOB
  const digits = dob.replace(/-/g, "").split("").map(Number);
  const loshuGrid: Record<number, number[]> = {
    1: [], 2: [], 3: [],
    4: [], 5: [], 6: [],
    7: [], 8: [], 9: []
  };

  // Add the digits from the DOB to the grid
  digits.forEach(num => {
    if (loshuGrid[num] !== undefined) {
      loshuGrid[num].push(num);
    }
  });

  // Add the Name Number, Life Path Number, and Radix to the grid
  const numbersToAdd = [nameNumber, lifePath, radix];

  numbersToAdd.forEach(num => {
    if (loshuGrid[num] !== undefined) {
      loshuGrid[num].push(num);  // Add the number to the corresponding grid spot
    }
  });

  return loshuGrid;
}

