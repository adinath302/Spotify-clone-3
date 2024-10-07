import React from "react";
import { Route, Routes } from "react-router-dom";
import Display_Home from "./Display_Home";

const Display = () => {
  return (
    <div className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:W-[75%] lg:ml-0">
      <Routes>
        <Route path='/' element={<Display_Home/>}/>
      </Routes>
    </div>
  );
};

export default Display;
