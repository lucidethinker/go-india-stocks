// components/Header.tsx

"use client";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";

const Header: React.FC = () => {
  return (
    <header className="bg-[#fff] py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center flex-grow">
          <Image src="/logo.png" alt="Logo" width={100} height={50} />
          {/* Adjust width and height as needed */}
          <div className="relative ml-8 flex-grow sm:ml-3">
            <div className="flex items-center border rounded-md border-black">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 bg-gray-100 rounded-md focus:outline-none w-full sm:w-96"
              />
              {/* Add your search bar */}
              <SearchIcon className="h-5 w-5 text-gray-500 absolute right-2 top-1/2 transform -translate-y-1/2" />
              {/* Add SearchIcon inside the search bar */}
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="hidden md:block">
            <button className="text-black bg-white px-4 py-2 mr-2">
              Contact Us
            </button>
            {/* Add your Contact Us button */}
            <button className="text-black bg-white border border-black px-4 py-2 mr-2">
              Sign In
            </button>
            <button className="text-black bg-white border border-black px-4 py-2 mr-2">
              Login
            </button>
            {/* Add your Sign In button */}
          </div>
          <div className="md:hidden">
            <div className="rounded-full bg-gray-100 w-12 h-12 flex items-center justify-center">
              <span className="text-gray-500 text-lg">A</span>
              {/* Add your avatar */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
