import React from "react";
import Checkout from "@/components/Checkout";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Kassa | Slutför ditt köp hos Ornexa",
  description: "Slutför din beställning hos Ornexa på ett enkelt och smidigt sätt. Granska dina produkter, fyll i dina uppgifter och gå vidare till betalning.",
  // other metadata
};

const CheckoutPage = () => {
  return (
    <main>
      <Checkout />
    </main>
  );
};

export default CheckoutPage;
