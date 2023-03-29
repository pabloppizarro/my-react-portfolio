import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavbarHeader from "./NavbarHeader";
import Sider from "./Sider";
import classes from "./RootLayout.module.css";

function RootLayout() {
    return (
        <>
            {/* header */}
            <header className={classes.header}>
                <NavbarHeader></NavbarHeader>
            </header>
            {/* body */}
            <aside className={classes.aside}>
                <Sider></Sider>
            </aside>
            <div className={classes.main}>
                <Outlet></Outlet>
            </div>
            {/* footer */}
            <footer className={classes.footer}>
                <Footer></Footer>
            </footer>
        </>
    );
}

export default RootLayout;
