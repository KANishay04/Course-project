import React from "react";

function CoursesScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-200 text-gray-800 flex flex-col items-center p-6">
      {/* Жоғарғы бөлім */}
      <header className="py-8">
        <h1 className="text-4xl font-bold text-indigo-600">Find a Course</h1>
        <p className="mt-2 text-lg text-center text-gray-700">Featured Courses</p>
      </header>

      {/* Курстар бөлімі */}
      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* General English */}
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
          <img
            src="https://via.placeholder.com/150"
            alt="General English"
            className="rounded-md w-full"
          />
          <h3 className="text-xl font-semibold text-indigo-600">General English</h3>
          <p className="text-sm text-gray-700">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md transition duration-200">
            More
          </button>
        </div>

        {/* Classic English */}
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Classic English"
            className="rounded-md w-full"
          />
          <h3 className="text-xl font-semibold text-indigo-600">Classic English</h3>
          <p className="text-sm text-gray-700">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md transition duration-200">
            More
          </button>
        </div>

        {/* Business English */}
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Business English"
            className="rounded-md w-full"
          />
          <h3 className="text-xl font-semibold text-indigo-600">Business English</h3>
          <p className="text-sm text-gray-700">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md transition duration-200">
            More
          </button>
        </div>
      </section>
    </div>
  );
}

export default CoursesScreen;
