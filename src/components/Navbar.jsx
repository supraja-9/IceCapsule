import { Link } from 'react-router-dom'
import Logo from '/src/components/Logo'

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4 flex justify-between">
    <div className="a-center gap-3">
      <Logo />
      <h1 className="text-xl font-bold">Drive Clone</h1>
    </div>
    <div className="v-center">
      <Link to="/login" className="bg-blue-500 px-4 py-2 rounded">
        Login
      </Link>
    </div>
  </nav>
)

export default Navbar
