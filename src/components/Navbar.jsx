import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4 flex justify-between">
    <h1 className="text-xl font-bold">Drive Clone</h1>
    <Link to="/login" className="bg-blue-500 px-4 py-2 rounded">Login</Link>
  </nav>
);

export default Navbar;
