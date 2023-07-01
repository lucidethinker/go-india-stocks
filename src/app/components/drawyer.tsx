"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="flex">
      <div className="relative">
        <button
          className="bg-gray-500 text-white p-2 rounded-full absolute top-2 left-2 z-10"
          onClick={toggleDrawer}
        >
          {isOpen ? (
            <ChevronLeft sx={{ fontSize: 20 }} />
          ) : (
            <ChevronRight sx={{ fontSize: 20 }} />
          )}
        </button>
        <div
          className={`bg-gray-200 w-60 h-screen fixed top-0 left-0 transition-transform duration-300 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Add your tool components or content here */}
          <p>Tool 1</p>
          <p>Tool 2</p>
          <p>Tool 3</p>
          {/* ... */}
        </div>
      </div>
    </div>
  );
}
