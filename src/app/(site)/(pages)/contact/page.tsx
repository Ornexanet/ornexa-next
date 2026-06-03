import Contact from "@/components/Contact";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Kontakt | Kontakta Ornexa",
  description: "Har du frågor om produkter, beställningar eller samarbeten? Kontakta Ornexa så hjälper vi dig snabbt och enkelt.",
  // other metadata
};

const ContactPage = () => {
  return (
    <main>
      <Contact />
    </main>
  );
};

export default ContactPage;
