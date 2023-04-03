import { Avatar } from "@mui/joy";
import { Link } from "react-router-dom";

function NavbarHeader({ children }) {
    return (
        <>
            <nav>
                <Avatar>PP</Avatar>
                {/* {children} */}
                <Link to="/">Me </Link>
                <Link to="/more">More about me... </Link>
                <Link to="contact-me">Contact me </Link>
            </nav>
        </>
    );
}

export default NavbarHeader;
