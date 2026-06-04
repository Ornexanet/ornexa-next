import Signin from "@/components/Auth/Signin";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Logga in | Ornexa",
  description: "Logga in på ditt Ornexa-konto för att hantera beställningar, önskelista och kontoinformation.",
  // other metadata
};

const SigninPage = () => {
  return (
    <main>
      <Signin />
    </main>
  );
};

export default SigninPage;
