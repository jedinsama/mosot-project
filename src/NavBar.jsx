import { Link, NavLink } from "react-router-dom";
import { Code2 } from "lucide-react";

function NavBar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">

      <div className="space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `nav-link ${isActive ? "text-blue-400 font-bold" : ""}`
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `nav-link ${isActive ? "text-blue-400 font-bold" : ""}`
          }
        >
          ABOUT ME
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
