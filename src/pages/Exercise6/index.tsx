import { useState } from "react";
import Header from "../../components/Header";
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
    <div className="flex flex-col w-screen h-screen items-center pt-40">
      <Header pageTitle="React Exercise 6" />
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          technology={tech.technology}
          isUsed={tech.isUsed}
          onUpdate={() => handleUpdateSingleElement(tech.id)}
        />
      ))}
      <button className="my-3" onClick={handleUpdateMultipleElements}>
        Update multiple elements
      </button>
      <button onClick={handleResetState}>Reset state</button>
    </div>
  );
};

export default Exercise6;
