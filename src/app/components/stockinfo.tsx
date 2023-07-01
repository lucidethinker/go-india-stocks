"use client";
import React, { useEffect, useState } from "react";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

interface Stock {
  symbol: string;
  price: number;
}

const StockInfo: React.FC = () => {
  const [stocks, setStocks] = useState<Stock[]>([
    { symbol: "AAPL", price: 150.25 },
    { symbol: "GOOGL", price: 2750.1 },
    { symbol: "MSFT", price: 300.5 },
    { symbol: "AAPL", price: 150.25 },
    { symbol: "GOOGL", price: 2750.1 },
    { symbol: "MSFT", price: 300.5 },
    { symbol: "AAPL", price: 150.25 },
    { symbol: "GOOGL", price: 2750.1 },
    { symbol: "MSFT", price: 300.5 },
    { symbol: "AAPL", price: 150.25 },
    { symbol: "GOOGL", price: 2750.1 },
    { symbol: "MSFT", price: 300.5 },
    // Add more stock objects as needed
  ]);

  useEffect(() => {
    // Update stock prices periodically
    const interval = setInterval(() => {
      setStocks((prevStocks) =>
        prevStocks.map((stock) => ({
          ...stock,
          price: generateRandomPrice(stock.price),
        }))
      );
    }, 5000); // Update every 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Function to generate a random price change
  const generateRandomPrice = (price: number): number => {
    const minChange = -1.0;
    const maxChange = 1.0;
    const change = Math.random() * (maxChange - minChange) + minChange;
    return parseFloat((price + change).toFixed(2));
  };

  // Function to determine arrow color based on price change
  const getArrowColor = (prevPrice: number, currentPrice: number): string => {
    return prevPrice < currentPrice ? "text-green-500" : "text-red-500";
  };

  return (
    <div className=" w-full flex items-center p-0">
      <div className="flex flex-row gap-2 bg-black p-2  shadow-md">
        {stocks.map((stock) => {
          const prevPrice = generateRandomPrice(stock.price - 1); // Generate a previous price for comparison
          const arrowColor = getArrowColor(prevPrice, stock.price);
          return (
            <div
              key={stock.symbol}
              className={`px-2 py-1 text-white rounded-md ${arrowColor}`}
            >
              {stock.symbol}: {stock.price}{" "}
              {stock.price > prevPrice ? (
                <ArrowUpward fontSize="small" />
              ) : (
                <ArrowDownward fontSize="small" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StockInfo;
