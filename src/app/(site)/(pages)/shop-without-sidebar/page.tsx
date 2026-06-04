import React from "react";
import ShopWithoutSidebar from "@/components/ShopWithoutSidebar";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Alla produkter | Ornexa",
  description: "Utforska alla produkter hos Ornexa. Bläddra bland kategorier, priser och utvalda erbjudanden i en enkel butiksvy.",
  // other metadata
};

const ShopWithoutSidebarPage = () => {
  return (
    <main>
      <ShopWithoutSidebar />
    </main>
  );
};

export default ShopWithoutSidebarPage;
