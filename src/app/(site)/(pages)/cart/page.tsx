import React from "react";
import Cart from "@/components/Cart";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Varukorg | Ornexa",
  description: "Se produkterna i din varukorg, kontrollera priser och fortsätt till kassan hos Ornexa.",
  // other metadata
};

const CartPage = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export default CartPage;
