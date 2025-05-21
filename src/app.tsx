import { Routes, Route } from "react-router-dom"
import LandingLayout from "./landing-layout"
import Landing from "./components/landing"
import Why from "./components/why"
import Contact from "./components/contact"
import About from "./components/about"

export default function App() {
    return (
        <Routes>
            <Route element={<LandingLayout />} >
                <Route path="/" element={<Landing/>} />
                <Route path="/why" element={<Why/>} />
                <Route path="/contact" element={<Contact/>} />
                 <Route path="/about" element={<About/>} />
            </Route>
        </Routes>

    )
}