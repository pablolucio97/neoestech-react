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
    <div>
      <p>Company: {company.name}</p>
      <p>Segment: {company.segment}</p>
      <span>Details:</span>
      <p>ZipCode: {company.details.zipCode}</p>
      <p>Number of employees: {company.details.numberOfEmployees}</p>
      <button onClick={onUpdateCompany}>Update company</button>
      <button onClick={onUpdateCompanyDetails}>Update company details</button>
    </div>
  );
};

export default CompanyCard;
