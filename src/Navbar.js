import { Link } from "react-router-dom"
export const Navbar = () => {
    return (
        <div>
        <Link to="/"> Home </Link>
        <Link to="/Profile"> Profile </Link>
        <Link to="/Contact"> Contact </Link>
      </div>
    );
}