// src/components/screens/ContactScreen.js
import React from "react";

function ContactScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-200 text-gray-800 p-6">
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-8">
        If you have any questions or need further information, please contact us!
      </p>
      <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactScreen;
