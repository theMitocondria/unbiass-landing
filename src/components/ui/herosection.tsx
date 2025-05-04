"use client";
import { motion } from "motion/react";
import { MovingBorderDemo } from "../button";
const formUrl = import.meta.env.VITE_FORM_URL ;
export function HeroSectionOne() {
    return (
        <div className="px-[10vw] relative mx-auto my-4 flex flex-col items-center justify-center">
            <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 ">
                <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
            </div>
            <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 ">
                <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 ">
                <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </div>
            <div className="pt-12">
                <MovingBorderDemo />
            </div>
            <div className="px-4 pb-10  md:pb-20 md:py-2">

                <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl ">
                    {"Exceptional Dev Talent. Proven. Secure. Unbiass."
                        .split(" ")
                        .map((word, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                    ease: "easeInOut",
                                }}
                                className="mr-2 inline-block"
                            >
                                {word}
                            </motion.span>
                        ))}
                </h1>
                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 0.8,
                    }}
                    className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 "
                >
                    And it’s not just AI: through continuous iteration, human oversight, and relentless refinement, we safeguard the trust you place in us every step of the way .
                </motion.p>
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 1,
                    }}
                    className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
                >
                    <button className="w-60 transform cursor-pointer rounded-full bg-[#4c52ff] px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#4c52ff] hover:border hover:border-[#4c52ff]"
                    onClick={()=>window.location.href = `${formUrl}`}>
                        Explore Now
                    </button>
                    <button className="w-60 transform cursor-pointer rounded-full border border-[#4c52ff] bg-white px-6 py-2 font-medium text-[#4c52ff] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4c52ff] hover:text-white "
                    onClick={()=>window.location.href = `${formUrl}`}>
                        Contact Support
                    </button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 1.2 }}
                    className="relative z-10 my-20 p-4"
                >
                    {/* Outer wrapper handles overflow & rounding */}
                    <div className="relative overflow-hidden rounded-3xl">
                        {/* This is the actual box with border and shadow */}
                        <div className="relative z-0 border border-neutral-200 bg-neutral-100 shadow-md ">
                            <img
                                src="https://res.cloudinary.com/dejvlvhlp/image/upload/v1746250727/Screenshot_from_2025-05-03_11-08-32_yuqty6.png"
                                alt="Landing page preview"
                                className="border border-slate-200 h-auto w-full object-cover"
                            />
                        </div>

                        {/* Gradient Fader OVER entire box, including border */}
                        <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-32 w-full bg-gradient-to-t from-white to-transparent " />
                    </div>
                </motion.div>

            </div>
        </div>//
    );
}

