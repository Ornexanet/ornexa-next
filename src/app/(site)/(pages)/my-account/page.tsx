import MyAccount from "@/components/MyAccount";
import React from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mitt konto | Ornexa",
  description: "Hantera ditt Ornexa-konto, se beställningar, uppdatera dina uppgifter och spara dina favoriter.",
  // other metadata
};

const MyAccountPage = () => {
  return (
    <main>
      <MyAccount />
    </main>
  );
};

export default MyAccountPage;
