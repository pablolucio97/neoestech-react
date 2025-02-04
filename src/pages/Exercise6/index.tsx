import { useState } from "react";
import { techs, TTech } from "../../mocks/techs";
import TechCard from "./components/TechCard";

const Exercise6: React.FC = () => {
  const [technologies, setTechnologies] = useState<TTech[]>(techs);

  //alterando um único elemento
  const handleUpdateSingleElement = (elementId: string) => {
    setTechnologies((prevState) =>
      prevState.map((item) =>
        item.id === elementId ? { ...item, technology: "NextJS" } : item
      )
    );
  };

  //alterando multiplos elementos
  const handleUpdateMultipleElements = () => {
    setTechnologies((prevState) =>
      prevState.map((item) => ({ ...item, isUsed: !item.isUsed }))
    );
  };

  const handleResetState = () => {
    setTechnologies(techs);
  };

  return (
    <>
      <p>React Exercise 6</p>
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          technology={tech.technology}
          isUsed={tech.isUsed}
          onUpdate={() => handleUpdateSingleElement(tech.id)}
        />
      ))}
      <button onClick={handleUpdateMultipleElements}>
        Update multiple elements
      </button>
      <button onClick={handleResetState}>Reset state</button>
    </>
  );
};

export default Exercise6;
