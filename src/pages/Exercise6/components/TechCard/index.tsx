import React from "react";
import { MdCircle } from "react-icons/md";
interface TechCardProps {
  technology: string;
  isUsed: boolean;
  onUpdate: () => void;
}

const TechCard: React.FC<TechCardProps> = ({
  technology,
  isUsed,
  onUpdate,
}) => {
  return (
    <div className="w-[95%] md:w-[40rem] flex flex-col bg-gray-50 p-4 rounded-lg shadow-md mb-3">
      <span className="mb-2 text-md md:text-lg font-bold">{technology}</span>
      {isUsed ? (
        <>
          <MdCircle className="h-4 w-4 text-green-300" /> <p>Used</p>
        </>
      ) : (
        <>
          <MdCircle className="h-4 w-4 text-red-300" /> <p>Not Used</p>
        </>
      )}
      {technology !== "NextJS" && (
        <button
          className="w-full bg-orange-400 text-white font-bold mt-3"
          onClick={onUpdate}
        >
          Update to "NextJS"
        </button>
      )}
    </div>
  );
};

export default TechCard;
