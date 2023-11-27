"use client";
import { tailwindColors } from "../../../../tailwind.config";

export const Colors: React.FC = () => (
  <div className="flex flex-wrap justify-center">
    {Object.entries(tailwindColors).map(([name, color]) => (
      <ColorBox key={name} name={name} color={color} />
    ))}
  </div>
);

console.log(Object.entries(tailwindColors));
const ColorBox: React.FC<{ name: string; color: string }> = ({
  name,
  color,
}) => {
  return (
    <div
      className="w-96 h-60 flex flex-col items-center justify-center text-center uppercase"
      style={{ backgroundColor: color }}
    >
      <span>{name}</span>
      <span>{color}</span>
    </div>
  );
};
