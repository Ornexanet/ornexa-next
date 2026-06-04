import React from "react";
import { Wishlist } from "@/components/Wishlist";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Önskelista | Ornexa",
  description: "Spara dina favoritprodukter i önskelistan hos Ornexa och hitta dem enkelt senare",
   alternates: {
    canonical: "https://lab.ornexa.net/wishlist",
  },
};

  // other metadata

const WishlistPage = () => {
  return (
    <main>
      <Wishlist />
    </main>
  );
};

export default WishlistPage;
