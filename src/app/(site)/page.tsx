const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ornexa",
  url: "https://lab.ornexa.net",
  logo: "https://lab.ornexa.net/images/Ornexa-open-graph.png",
};

import Home from "@/components/Home";
import JsonLd from "@/components/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ornexa | Elektronik, Tillbehör & Smart Shopping",
  description: "Upptäck elektronik, tillbehör och smarta erbjudanden hos Ornexa. Handla kvalitetsprodukter med en modern och smidig shoppingupplevelse.",
  openGraph: {
  title: "Ornexa | Elektronik, Tillbehör & Smart Shopping",
  description: "Upptäck elektronik, tillbehör & Smart shopping",
  images: ["/images/Ornexa-open-graph.png"],
  },
  alternates: {
  canonical: "https://lab.ornexa.net/",
  },

  // other metadata
};

export default function HomePage() {
  return (
    <>
    <JsonLd data={organizationSchema} />
      <Home />
    </>
  );
}
