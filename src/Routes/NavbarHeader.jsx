import { Avatar } from "@mui/joy";
import { Link } from "react-router-dom";

function NavbarHeader() {
    return (
        <>
            <nav>
                <Avatar>PP</Avatar>
                <Link to="/">Me </Link>
                <Link to="/more">More about me... </Link>
                <Link to="contact-me">Contact me </Link>
            </nav>
        </>
    );
}

export default NavbarHeader;
