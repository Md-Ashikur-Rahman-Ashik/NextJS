"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  const placeOrder = () => {
    alert("Order Confirmed");
    router.push("/");
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-5xl">Product Page</h1>
      <div className="flex justify-center items-center mt-5 gap-4 flex-col">
        <ul>
          <li>Buy iPhone</li>
        </ul>
        <button
          onClick={placeOrder}
          className="bg-black text-white p-1 rounded-xl"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default Page;
