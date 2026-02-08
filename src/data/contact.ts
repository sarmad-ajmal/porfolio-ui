export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  website: string;
}

export const contact: ContactInfo = {
  name: "Sarmad Ajmal",
  title: "Senior Full-Stack Developer",
  email: "hola.sarmad@gmail.com",
  phone: "+92-315-5509235",
  location: "Islamabad, Pakistan",
  linkedin: "https://linkedin.com/in/sarmad-ajmal",
  website: "https://sarmadajmal.me",
};

export const stats = [
  {
    value: "6+",
    label: "Years Experience",
  },
  {
    value: "20+",
    label: "Projects Delivered",
  },
  {
    value: "2",
    label: "AWS Certifications",
  },
  {
    value: "100%",
    label: "Client Satisfaction",
  },
];
