import { TCompany } from "../../../../mocks/company";

interface CompanyCardProps {
  company: TCompany;
  onUpdateCompany: () => void;
  onUpdateCompanyDetails: () => void;
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  company,
  onUpdateCompany,
  onUpdateCompanyDetails,
}) => {
  return (
    <div className="w-[95%] md:w-[40rem] flex flex-col bg-gray-50 p-4 rounded-lg shadow-md mb-3">
      <span className="mb-2 text-md md:text-lg font-bold">Basic info</span>
      <span className="mb-2 text-md md:text-lg">Company: {company.name}</span>
      <span className="mb-2 text-md md:text-lg">
        Segment: {company.segment}
      </span>
      <span className="mb-2 text-md md:text-lg font-bold">Details</span>
      <span className="mb-2 text-md md:text-lg">
        ZipCode: {company.details.zipCode}
      </span>
      <span className="mb-2 text-md md:text-lg">
        Number of employees: {company.details.numberOfEmployees}
      </span>
      <button
        className="my-3 w-full bg-orange-400 text-white font-bold"
        onClick={onUpdateCompany}
      >
        Update company
      </button>
      <button
        className="w-full bg-orange-400 text-white font-bold"
        onClick={onUpdateCompanyDetails}
      >
        Update company details
      </button>
    </div>
  );
};

export default CompanyCard;
