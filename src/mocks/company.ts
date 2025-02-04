export type TCompanyDetails = {
  zipCode?: string;
  numberOfEmployees: number;
};

export type TCompany = {
  name: string;
  segment: string;
  details: TCompanyDetails;
};

export const companyObj: TCompany = {
  name: "NeoEstech",
  segment: "Technology",
  details: {
    numberOfEmployees: 30,
    zipCode: "13284-026",
  },
};
