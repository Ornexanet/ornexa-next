import Home from "@/components/Home";
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
      <Home />
    </>
  );
}
