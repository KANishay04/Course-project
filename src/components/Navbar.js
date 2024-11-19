import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex space-x-6">
        <Link to="/" className="text-gray-800 px-3 py-2 hover:text-indigo-600">Home</Link>
        <Link to="/about" className="text-gray-800 px-3 py-2 hover:text-indigo-600">About</Link>
        <Link to="/courses" className="text-gray-800 px-3 py-2 hover:text-indigo-600">Courses</Link>
        <Link to="/contact" className="text-gray-800 px-3 py-2 hover:text-indigo-600">Contact</Link>
        <Link to="/profile" className="text-gray-800 px-3 py-2 hover:text-indigo-600">Profile</Link> {/* Жаңа батырма */}
      </div>
      <div className="space-x-4">
        <Link to="/login" className="text-gray-600 border border-gray-400 px-4 py-2 rounded-md hover:bg-gray-100">Sign In</Link>
        <Link to="/register" className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
