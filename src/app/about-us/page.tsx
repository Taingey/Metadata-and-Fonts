import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: "/assets/pic.jph"
  },
  title: "About",
  description: "This is About page",
  keywords: ["shop", "ecommerce", "sell"]
};
const page = () => {
  return <div>About Page</div>;
};

export default page;
