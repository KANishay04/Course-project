import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation(); // Ағымдағы маршруттың жолын алу

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-indigo-600 border-b-2 border-indigo-600" // Белсенді стиль
      : "text-gray-800 hover:text-indigo-600"; // Әдеттегі стиль
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex space-x-6">
        <Link to="/" className={`${getLinkClass("/")}`}>
          Home
        </Link>
        <Link to="/about" className={`${getLinkClass("/about")}`}>
          About
        </Link>
        <Link to="/courses" className={`${getLinkClass("/courses")}`}>
          Courses
        </Link>
        <Link to="/contact" className={`${getLinkClass("/contact")}`}>
          Contact
        </Link>
        <Link to="/profile" className={`${getLinkClass("/profile")}`}>
          Profile
        </Link>
      </div>
      <div className="space-x-4">
        <Link
          to="/login"
          className="text-gray-600 border border-gray-400 px-4 py-2 rounded-md hover:bg-gray-100"
        >
          Sign In
        </Link>
        <Link
          to="/register"
          className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
