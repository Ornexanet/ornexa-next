import React from "react";
import Cart from "@/components/Cart";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Varukorg | Ornexa",
  description: "Granska dina produkter i varukorgen hos Ornexa innan du går vidare till kassan",
alternates:{
  canonical: "https://lab.ornexa.net/cart",
},
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
