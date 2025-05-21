import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import { NavbarDemo } from "./components/header";

export default function LandingLayout() {
    return (
        <>
            <NavbarDemo />
            <Outlet />
            <Footer />
        </>
    )
}