import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
      <div class="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div class="text-indigo-500 md:order-1">
          <h1>React MySQL</h1>
        </div>
        <div class="text-gray-500 order-3 w-full md:w-auto md:order-2">
          <ul class="flex font-semibold justify-between">
            <li class="md:px-4 md:py-2 text-indigo-500">
              <Link to="/">Home</Link>
            </li>
            <li class="md:px-4 md:py-2 hover:text-indigo-400 text-indigo-500">
              <Link to="/new">Create task</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
