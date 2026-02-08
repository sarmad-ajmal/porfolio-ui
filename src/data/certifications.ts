export interface Certification {
  title: string;
  issuer: string;
  year: string;
  type: "certification" | "award";
}

export const certifications: Certification[] = [
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    year: "2025",
    type: "certification",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2025",
    type: "certification",
  },
  {
    title: "Web Developer of the Year",
    issuer: "Company Recognition",
    year: "2021-2022",
    type: "award",
  },
  {
    title: "Rising Talent of the Year",
    issuer: "Company Recognition",
    year: "2020-2021",
    type: "award",
  },
];
