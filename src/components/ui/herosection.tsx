"use client";
import { motion } from "motion/react";
import { MovingBorderDemo } from "../button";
const formUrl = import.meta.env.VITE_FORM_URL;
const demoUrl = import.meta.env.VITE_DEMO_URL;
export function HeroSectionOne() {
    return (
        <div className="my-12 px-[10vw] relative mx-auto my-auto md:min-h-screen flex flex-col items-center justify-center">
            <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 ">
                <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </div>
            <div className="pt-12">
                <MovingBorderDemo />
            </div>
            <div className="px-4 pb-10  md:pb-20 md:py-2">
                <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl ">
                    {"Fair, Cheat-Proof Remote Hiring Starts Here."
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
                    Unbiass lets you run secure, AI-powered assessments that detect cheaters and reward real talent.
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
                        onClick={() => window.location.href = `${formUrl}`}>
                        Start Hiring
                    </button>
                    <button className="w-60 transform cursor-pointer rounded-full border border-[#4c52ff] bg-white px-6 py-2 font-medium text-[#4c52ff] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4c52ff] hover:text-white "
                        onClick={() => window.location.href = `${demoUrl}`}>
                        Book a Demo
                    </button>
                </motion.div>


            </div>
        </div>//
    );
}

