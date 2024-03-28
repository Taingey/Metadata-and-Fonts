import React from "react";
import ListPageComponent from "./ListPageComponent";
import { Metadata } from "next";
export const metadata: Metadata = {
  icons: {
    icon: "/assets/pic.jpg"
  },

  title: "List",
  description: "This is List page shop",
  keywords: ["shop", "ecommerce", "sell"]
};
const page = () => {
  return (
    <div>
      <ListPageComponent />
    </div>
  );
};

export default page;
