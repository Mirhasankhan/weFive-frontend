"use client";
import Card, { TProduct } from "@/components/ui/Card";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const BigDeals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="py-12">
      <div className="flex items-center justify-between pb-4">
        <div className="text-xl">
          <h1 className="text-[#6441C2] ">SUMMER</h1>
          <h1 className="font-semibold">Big Deal</h1>
        </div>
        <div className="flex gap-1 items-center">
          <GoArrowLeft className="text-[#6441C2] text-2xl p-1 border border-[#6441C2] rounded-full"></GoArrowLeft>
          <GoArrowRight className="text-[#6441C2] text-2xl p-1 border border-[#6441C2] rounded-full"></GoArrowRight>
        </div>
      </div>
      <div className="bg-white p-2 md:grid grid-cols-4 gap-6">
        {products?.map((product: TProduct) => (
          <Card key={product._id} bigDeal={true} product={product}></Card>
        ))}
      </div>
      <div className="flex justify-center mt-3">
        <button className="rounded-lg py-1 px-3 text-white bg-[#6441C2]  border border-[#6441C2] ">
          See More
        </button>
      </div>
    </div>
  );
};

export default BigDeals;
