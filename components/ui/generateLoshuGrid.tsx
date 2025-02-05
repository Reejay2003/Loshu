export function generateLoshuGrid(dob: string): Record<number, number[]> {
  const digits = dob.replace(/-/g, "").split("").map(Number);
  const loshuGrid: Record<number, number[]> = {
    1: [], 2: [], 3: [],
    4: [], 5: [], 6: [],
    7: [], 8: [], 9: []
  };

  digits.forEach(num => {
    if (loshuGrid[num] !== undefined) {
      loshuGrid[num].push(num);  // Push the number itself into the grid position
    }
  });

  return loshuGrid;
}
