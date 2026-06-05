import Home from "@/components/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TEST HOMPAGE TITLE",
  description: "Upptäck elektronik, tillbehör och smarta erbjudanden hos Ornexa. Handla kvalitetsprodukter med en modern och smidig shoppingupplevelse.",
  alternates: {
    canonical: "https//lab.ornexa.net/",
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
