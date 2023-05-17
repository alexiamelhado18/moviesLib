
import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import "./style.css";

export const NavBar = () => {
    return (
        <header>

            <Link to="/" id="link__logo"><BiCameraMovie />MoviesLib</Link>

            <form action="">

                <input type="search" name="" id="" />
                <button type="submit"><BiSearchAlt2 /></button>

            </form>

            <nav>
                <Link to="/Home">Link 1</Link>
                <Link to="">Link 2</Link>
                <Link to="">Link 3</Link>
            </nav>
        </header>
    )
}
