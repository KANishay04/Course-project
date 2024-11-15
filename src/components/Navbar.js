// src/components/Navbar.js
import React from "react";

function Navbar({ onHomeClick, onAboutClick, onCoursesClick, onContactClick }) {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex space-x-6">
        <button onClick={onHomeClick} className="text-gray-800 px-3 py-2 hover:text-indigo-600">Home</button>
        <button onClick={onAboutClick} className="text-gray-800 px-3 py-2 hover:text-indigo-600">About</button>
        <button onClick={onCoursesClick} className="text-gray-800 px-3 py-2 hover:text-indigo-600">Courses</button>
        <button onClick={onContactClick} className="text-gray-800 px-3 py-2 hover:text-indigo-600">Contact</button>
      </div>
      <div className="space-x-4">
        <button className="text-gray-600 border border-gray-400 px-4 py-2 rounded-md hover:bg-gray-100">Sign In</button>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">Register</button>
      </div>
    </nav>
  );
}

export default Navbar;
