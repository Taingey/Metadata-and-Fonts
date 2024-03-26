/* eslint-disable @next/next/no-async-client-component */
"use client"
import CardComponent from "@/components/cards/CardComponent";
import { ProductType } from "@/types/product";
import { Suspense } from "react";
import LoadingComponent from "../loading";
import Link from "next/link";

async function fetchProduct() {
  const product = await fetch("https://dummyjson.com/products?limit=100", {
    cache: "no-store"
  });
  const res = await product.json();
  return res.products;
}

export default async function Home() {
  const product = await fetchProduct();

  return (
    <>
      <div className="mt-10 flex justify-center flex-wrap gap-5">
        <h1 className="font-bold text-large">Hi</h1>
        <Suspense fallback={<LoadingComponent />}>
          {product?.map((pro: ProductType) => {
            return (
              <Link href={`/product/${pro.id}`} key={pro.id}>
                <CardComponent thumbnail={pro.thumbnail} title={pro.title} />
              </Link>
            );
          })}
        </Suspense>
      </div>
    </>
  );
}
