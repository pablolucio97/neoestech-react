import { useState } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
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
    <div className="flex flex-col w-screen h-screen items-center pt-40">
      <Header pageTitle="React Exercise 5" />
      <Title title="Updating objects" />
      <CompanyCard
        company={company}
        onUpdateCompany={handleUpdateCompany}
        onUpdateCompanyDetails={handleUpdateCompanyDetails}
      />
      <button onClick={handleResetState}>Reset state</button>
    </div>
  );
};

export default Exercise5;
