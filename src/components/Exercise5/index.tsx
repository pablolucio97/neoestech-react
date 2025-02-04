import { useState } from "react";
import { companyObj, TCompany } from "../../mocks/company";
import CompanyCard from "./components/CompanyCard";

const Exercise5: React.FC = () => {
  const [company, setCompany] = useState<TCompany>(companyObj);

  //atualizando o objeto company
  const handleUpdateCompany = () => {
    setCompany((prevState) => ({
      ...prevState,
      name: "NeoEstech Tech",
    }));
  };

  //atualizando o objeto company com a aninhada propriedade details
  const handleUpdateCompanyDetails = () => {
    setCompany((prevState) => ({
      ...prevState,
      details: {
        ...prevState.details,
        numberOfEmployees: 31,
      },
    }));
  };

  const handleResetState = () => {
    setCompany(companyObj);
  };

  return (
    <>
      <p>React Exercise 5</p>
      <CompanyCard
        company={company}
        onUpdateCompany={handleUpdateCompany}
        onUpdateCompanyDetails={handleUpdateCompanyDetails}
      />
      <button onClick={handleResetState}>Reset state</button>
    </>
  );
};

export default Exercise5;
