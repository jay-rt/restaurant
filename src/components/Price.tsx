"use client";

import { useState, useEffect } from "react";

type PriceProps = {
  id: number;
  price: number;
  options: {
    title: string;
    additionalPrice: number;
  }[];
};

const Price = ({ id, price, options }: PriceProps) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const totalPrice = (price + options[selected].additionalPrice) * quantity;
    setTotal(totalPrice);
  }, [price, options, selected, quantity]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* OPTIONS CONTIANER */}
      <div className="flex gap-4">
        {options.map((option, index) => (
          <button
            type="button"
            key={option.title}
            className="p-2 ring-1 ring-red-400 rounded-md"
            style={{
              backgroundColor: selected === index ? "rgb(239 68 68)" : "#fff",
              color: selected === index ? "#fff" : "rgb(239 68 68)",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* QUANTITY CONTIANER AND ADD BUTTON*/}
      <div className="flex-between">
        {/* QUANTITY CONTIANER */}
        <div className="w-full flex-between ring-1 ring-red-500 p-3">
          <span>Quantity</span>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        {/* ADD BUTTON */}
        <button
          type="button"
          className="w-56 uppercase bg-red-500 text-white p-3 ring-1 ring-red-500"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
