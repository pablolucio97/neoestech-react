import React from "react";

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
    <div style={{ border: "1px solid white", padding: "10px", margin: "10px" }}>
      <span>{technology}</span>
      {isUsed ? <p>Used</p> : <p>Not used</p>}
      {technology !== "NextJS" && (
        <button onClick={onUpdate}>Update as "NextJS"</button>
      )}
    </div>
  );
};

export default TechCard;
