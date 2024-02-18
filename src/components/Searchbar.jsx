// React Imports
import React, { useState } from "react";

// React Toastify Imports
import { toast } from "react-toastify";

// React Icons Imports
import { IoMdSearch } from "react-icons/io";

const Searchbar = ({ inputRef, handleLocationSearch }) => {
  // city State to store city name
  const [city, setCity] = useState("");

  // onSearchButtonClickFunction function to handle form submit and update state
  const onSearchButtonClickFunction = (e) => {
    e.preventDefault();

    if (city === "") {
      toast.info("Please enter city name", {
        position: "bottom-right",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      return;
    }

    handleLocationSearch(city);
    setCity("");
  };

  return (
    <form
      onSubmit={(e) => onSearchButtonClickFunction(e)}
      className="flex items-center justify-between h-14 bg-black/30 w-full max-w-[450px] rounded-md backdrop-blur-[32px] mb-4 p-2 pr-4"
    >
      <input
        type="text"
        value={city}
        ref={inputRef}
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 bg-transparent outline-none placeholder:text-white text-white text-[15px] font-light pl-6 h-full"
        placeholder="Search by city"
      />
      <button className="bg-[#1ab8ed] hover:bg-[#15abdd] w-12 h-8 rounded-3xl flex justify-center items-center transition cursor-pointer">
        <IoMdSearch className="text-2xl text-white" />
      </button>
    </form>
  );
};

export default Searchbar;
