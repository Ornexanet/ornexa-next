import React from "react";
import ShopWithSidebar from "@/components/ShopWithSidebar";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Butik | Utforska produkter hos Ornexa",
  description: "Utforska elektronik, tillbehör och smarta produkter hos Ornexa. Hitta aktuella erbjudanden och handla enkelt online.",
  // other metadata
};

const ShopWithSidebarPage = () => {
  return (
    <main>
      <ShopWithSidebar />
    </main>
  );
};

export default ShopWithSidebarPage;
