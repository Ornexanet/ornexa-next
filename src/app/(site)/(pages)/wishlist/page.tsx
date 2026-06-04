import React from "react";
import { Wishlist } from "@/components/Wishlist";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Önskelista | Spara dina favoritprodukter hos Ornexa",
  description: "Spara dina favoritprodukter i Ornexas önskelista och kom tillbaka senare för att jämföra, granska och handla smartare.",
 canonical: "/wishlist",
  // other metadata
};

const WishlistPage = () => {
  return (
    <main>
      <Wishlist />
    </main>
  );
};

export default WishlistPage;
