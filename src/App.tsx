import { useState } from "react";
import "./App.css";
import TechCard from "./components/TechCard";
import { techs, TTech } from "./mocks/techs";

function App() {
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
      <h1>Neo Estech</h1>
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
}

export default App;
