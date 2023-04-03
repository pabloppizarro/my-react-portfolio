import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavbarHeader from "./NavbarHeader";
import Sider from "./Sider";
import classes from "./RootLayout.module.css";
import SplitScreen from "../Layout/SplitScreen";

function RootLayout() {
    return (
        <>
            {/* header */}
            <header className={classes.header}>
                <NavbarHeader></NavbarHeader>
            </header>
            {/* body */}
            <SplitScreen weight={["1fr", "4fr"]}>
                {/* <Sider className={classes.aside}></Sider> */}
                <aside className={classes.aside}>
                    <Sider></Sider>
                </aside>
                <div className={classes.main}>
                    <Outlet></Outlet>
                </div>
                {/* <Outlet className={classes.main}></Outlet> */}
            </SplitScreen>
            {/* footer */}
            <footer className={classes.footer}>
                <Footer></Footer>
            </footer>
        </>
    );
}

export default RootLayout;
