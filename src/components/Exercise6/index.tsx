import { useState } from "react";
import { techs, TTech } from "../../mocks/techs";
import TechCard from "../TechCard";

const Exercise6: React.FC = () => {
  const [technologies, setTechnologies] = useState<TTech[]>(techs);

  //alterando um único elemento
  const updateSingleElement = (elementId: string) => {
    setTechnologies((prevState) =>
      prevState.map((item) =>
        item.id === elementId ? { ...item, technology: "NextJS" } : item
      )
    );
  };

  //alterando multiplos elementos
  const updateMultipleElements = () => {
    setTechnologies((prevState) =>
      prevState.map((item) => ({ ...item, isUsed: !item.isUsed }))
    );
  };

  return (
    <>
      <p>Exercise 6</p>
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          technology={tech.technology}
          isUsed={tech.isUsed}
          onUpdate={() => updateSingleElement(tech.id)}
        />
      ))}
      <button onClick={updateMultipleElements}>Update multiple elements</button>
    </>
  );
};

export default Exercise6;
