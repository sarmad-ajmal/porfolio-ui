import Script from 'next/script';

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sarmad Ajmal",
    "url": "https://sarmadajmal.me",
    "image": "https://sarmadajmal.me/opengraph-image",
    "sameAs": [
      "https://github.com/sarmad-ajmal",
      "https://linkedin.com/in/sarmad-ajmal",
      "https://twitter.com/SarmadAjmal"
    ],
    "jobTitle": "Senior Frontend Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Ophycare"
    },
    "knowsAbout": [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Next.js",
      "AWS",
      "Cloud Architecture",
      "Software Engineering",
      "Full-Stack Development",
      ".NET",
      "Enterprise Software"
    ],
    "description": "Senior Full-Stack Developer with 6+ years of experience building scalable SaaS applications using React, Node.js, and AWS."
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
