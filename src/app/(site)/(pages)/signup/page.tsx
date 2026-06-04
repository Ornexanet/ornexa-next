import Signup from "@/components/Auth/Signup";
import React from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Skapa konto | Ornexa",
  description: "Skapa ett Ornexa-konto för att spara produkter, hantera beställningar och få en smidigare shoppingupplevelse.",
  // other metadata
};

const SignupPage = () => {
  return (
    <main>
      <Signup />
    </main>
  );
};

export default SignupPage;
