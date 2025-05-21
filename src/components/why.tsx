import { useState } from "react"
import Image from "../ok.jpg"
export default function Why() {
    const [videoPalette, setVideoPalette] = useState<boolean>(false)

    const handlePalettleVisibility = () => {
        setVideoPalette(!videoPalette)
    }

    return (
        <div className="pt-[20vh] px-[12vw] flex items-center justify-center">

            <div className={`${videoPalette ? 'blur-sm' : ''}`}>
                <div className="flex items-center justify-center">
                    <p className=" font-bold text-sm text-[#4c52ff]">Why Choose Unbiass</p>
                </div>
                <div className="flex items-center justify-center">
                    <p className="text-6xl font-bold text-[#2e3541]">We Listen. We Build. We Evolve</p>
                </div>
                <div className="cursor-pointer m-[6vh] rounded-xl" onClick={handlePalettleVisibility}>
                    <img src={Image} className=" rounded-3xl mx-auto" />
                </div>
                <section className="w-full px-6 py-16 bg-white text-gray-800">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm text-gray-600 mt-6">
                        <div><span className="text-2xl font-bold text-[#4c52ff]">50K+</span><br />Solutions Analyzed</div>
                        <div><span className="text-2xl font-bold text-[#4c52ff]">100+</span><br />Hiring Teams Helped</div>
                        <div><span className="text-2xl font-bold text-[#4c52ff]">98%</span><br />Cheating Detection Accuracy</div>
                        <div><span className="text-2xl font-bold text-[#4c52ff]">4.9/5</span><br />User Satisfaction</div>
                    </div>
                    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20">
                        <div className="max-w-6xl mx-auto">

                            <div className="overflow-x-auto">
                                <table className="min-w-full border border-gray-300 divide-y divide-gray-300 text-left text-gray-800 text-base">
                                    <thead className="bg-gray-100 text-[#2e3541] font-bold text-2xl">
                                        <tr>
                                            <th className="py-4 px-6 w-1/2">The Problem</th>
                                            <th className="py-4 px-6 w-1/2">The Unbiass Solution</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 text-[18px]">
                                        <tr>
                                            <td className="py-4 px-6 align-top">
                                                Job posts attract thousands of applicants within hours . Screening each candidate costs $5–$8 on trusted platforms, wasting thousands per role.
                                            </td>
                                            <td className="py-4 px-6 align-top">
                                                We charge only for candidates you move forward with , at just fraction of original cost . <a className="text-[#4c52ff]  font-bold " href="/pricing">Check Out</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 px-6 align-top">
                                                Teams use shortcuts: <br />
                                                - ATS resume screening (biased)<br />
                                                - Referrals (limits diversity)<br />
                                                - Random selection
                                            </td>
                                            <td className="py-4 px-6 align-top">
                                                Each candidate can be evaluated by online assessment based on skill, not random ATS scores.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 px-6 align-top">
                                                Cheating is rampant — Telegram groups, AI coding tools, overlays go undetected.
                                            </td>
                                            <td className="py-4 px-6 align-top">
                                                Open source and cost-efficient — tested on 50k+ submissions and trusted by thousands.
                                                <br />
                                                <a
                                                    href="https://lc-police.vercel.app"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[#4c52ff] font-bold"
                                                >
                                                    View Demo
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 px-6 align-top">
                                                Legacy proctoring tools fail to verify the true candidate.
                                            </td>
                                            <td className="py-4 px-6 align-top">
                                                We track dual monitors, tab switches, overlays, AI content, background apps, and network anomalies in real time.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 px-6 align-top">
                                                Detection systems aren’t evolving fast enough.
                                            </td>
                                            <td className="py-4 px-6 align-top">
                                                Our models are updated regularly with community input and new patterns of cheating.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                        </div>
                    </div>


                   
                </section>
                 <section className="py-16 px-4 md:px-8 text-center bg-gray-50 rounded-xl shadow-xl max-w-5xl mx-auto my-[8vh]">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Fair , Cheat-Proof Hiring Awaits</h2>
                <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
                    Unbiass delivers smarter technology, fairer outcomes, and better ROI than traditional hiring platforms. 
                </p>
                <button className="mt-6 px-8 py-1 bg-[#4c52ff] text-white font-semibold rounded-full hover:bg-[#3a3fd9] transition shadow-md" onClick={() => window.location.href = 'https://calendly.com/dhruvmehta382/30min'}>
                    Start Hiring
                </button>
            </section>
            
            </div>

            {
                videoPalette ? <div className=" fixed top-[2w0vh] w-[52.5vw] h-[66vh]">
                    <div onClick={handlePalettleVisibility} className=" cursor-pointer px-2 flex items-center justify-end">
                        <p className="font-[600] text-[#2e3541] ">close</p>
                    </div>
                    <iframe
                        src="https://www.youtube.com/embed/jcJ06HzR5_M"
                        title="OA Demo Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="z-10 w-full h-full rounded-lg border border-8 border-gray-200"
                    ></iframe>
                </div> :
                    <></>
            }

        </div>
    )
}