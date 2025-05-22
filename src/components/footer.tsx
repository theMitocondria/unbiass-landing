import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
    const navigate = useNavigate()
    return (
        <footer className="px-[12vw] bg-gradient-to-b from-[#4c52ff]/90 to-[#4c52ff]/40 py-[2vh] text-white" id="footer">
            <div
            className="px-[4vw] rounded-lg pt-[8vh]"
            >
            <div className="flex items-center justify-between">
                {/* Left side: Logo + Description + Copyright */}
                <div className="h-full">
                <h2 className="text-4xl font-bold ">Unbiass</h2>
                <p className=" mb-[4vh] text-lg">Hire Smarter. Hire Faster. Hire Without Bias</p>
                <p  >New Delhi, India</p>
                <p  >Mon - Sat: 9:00 AM – 6:00 PM IST</p>
                <p className="text-sm" >© {new Date().getFullYear()} Unbiass. All rights reserved.</p>
                </div>

                {/* Right side: Links + Info + Icons */}
                <div className="flex flex-col items-start md:items-end space-y-2 text-sm">
                <a href="https://calendly.com/dhruvmehta382/30min" className="cursor-pointer hover:underline text-lg">Contact</a>
                <p onClick ={ ()=> navigate('/about' ) } className=" cursor-pointer hover:underline text-lg">About Us</p>
                <p onClick ={ ()=> navigate('/why' ) }  className=" cursor-pointer hover:underline text-lg">Why Unbiass</p>
                <div className="flex space-x-4 mt-2">
                    <a href="mailto:contact.unbiass@gmail.com" aria-label="Email">
                    <MdOutlineMailOutline className="text-xl " />
                    </a>
                    <a href="https://twitter.com/meMitocondria" target="_blank" rel="noopener noreferrer" aria-label="X">
                    <RiTwitterXFill className="text-xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/itzzdhruv/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FiLinkedin className="text-xl " />
                    </a>
                </div>
                </div>
            </div>
            </div>
            <div className="">
            <div className="md:h-[300px] h-[70px] overflow-hidden">
                <p className="text-black font-[1000] text-[65px] md:text-[280px] text-white text-shadow-white" style={{
                color: 'transparent',
                WebkitTextStroke: '0.5px white',

                }}>UNBIASS</p>
            </div>
            </div>
        </footer>

    );
};

export default Footer; 