import React from "react";
import ShopDetails from "@/components/ShopDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produktinformation | Ornexa",
  description: "Se produktinformation hos Ornexa, inklusive pris, detaljer och tillgänglighet för utvalda produkter.",
  // other metadata
};

const ShopDetailsPage = () => {
  return (
    <main>
      <ShopDetails />
    </main>
  );
};

export default ShopDetailsPage;
