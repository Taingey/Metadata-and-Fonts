"use client";
import { Metadata } from "next";
import { useSearchParams } from "next/navigation";

export const metadata: Metadata = {
  icons: {
    icon: "/assets/pic.jpg"
  },

  title: {
    template: "%s - MyShop",
    default: "MyShop"
  },
  description: "This is description shop",
  keywords: ["shop", "ecommerce", "sell"]
};

export default function ListPageComponent() {
  const searchParams = useSearchParams();

  function updateSorting(sortOrder: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sortOrder);
    window.history.pushState(null, "", `?${params.toString()}`);
  }

  return (
    <>
      <button onClick={() => updateSorting("asc")}>Sort Ascending</button>
      <button onClick={() => updateSorting("desc")}>Sort Descending</button>
    </>
  );
}
