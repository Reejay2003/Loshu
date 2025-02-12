interface NumerologyTableProps {
  nameNumber: number;
  lifePath: number;
  radix: number;
  loshuGrid: Record<number, number[]>;
}

const LoshuGrid: React.FC<{ grid: Record<number, number[]> }> = ({ grid }) => (
  <div className="grid grid-cols-3 gap-2 p-4 border border-gray-400 rounded-lg w-48 text-center">
    <div>{grid[4].length > 0 ? grid[4].join(", ") : "-"}</div>
    <div>{grid[9].length > 0 ? grid[9].join(", ") : "-"}</div>
    <div>{grid[2].length > 0 ? grid[2].join(", ") : "-"}</div>
    <div>{grid[3].length > 0 ? grid[3].join(", ") : "-"}</div>
    <div>{grid[5].length > 0 ? grid[5].join(", ") : "-"}</div>
    <div>{grid[7].length > 0 ? grid[7].join(", ") : "-"}</div>
    <div>{grid[8].length > 0 ? grid[8].join(", ") : "-"}</div>
    <div>{grid[1].length > 0 ? grid[1].join(", ") : "-"}</div>
    <div>{grid[6].length > 0 ? grid[6].join(", ") : "-"}</div>
  </div>
);

export default function NumerologyTable({
  nameNumber,
  lifePath,
  radix,
  loshuGrid,
}: NumerologyTableProps) {
  return (
    <div className="p-4 border rounded-lg space-y-4">
      <h2 className="text-xl font-bold">Numerology Analysis</h2>
      <p><strong>Name Number:</strong> {nameNumber}</p>
      <p><strong>Life Path Number:</strong> {lifePath}</p>
      <p><strong>Radix Number:</strong> {radix}</p>
      <div className="my-5">
        <h3 className="mt-4 text-lg font-semibold my-5">Loshu Grid</h3>
        <LoshuGrid grid={loshuGrid} />
      </div>
      
    </div>
  );
}
