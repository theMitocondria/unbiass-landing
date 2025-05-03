import WorldMap from "./ui/world-map";

export default function Started() {
    return (
        <div className="px-[12vw] py-[12vh] " id="contact">
            <div className="font-bold text-xl text-slate-600 mb-4">
                Globally
                <span className="text-5xl text-[#4c52ff] mx-4">UNBIASSED</span>
            </div>
            <div>
                <p>Filtering resumes, or second-guessing who's cheating? </p>
                <p> Unbiass delivers 98% accurate assessments with built-in anti-cheat tech! </p>
                <p> Unbiass lets you hire top talent from anywhere—remote, global, no onsite needed.
                    <span className=" text-[#4c52ff] font-bold mx-2">Fair. Fast. Foolproof.</span></p>
            </div>
            <div className="my-8">

                <button className="w-60 transform rounded-full border border-[#4c52ff] bg-white px-6 py-2 font-medium text-[#4c52ff] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 cursor-pointer"
                onClick={()=>window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdTQxCo1LnQxyAXNFFl6IMQHKxYJPBkoFBWQcVwMW3mzEmR3w/viewform'}>
                    Get in touch
                </button>
            </div>
            <div className="">

                <WorldMap
                    dots={[
                        {
                            start: {
                                lat: 64.2008,
                                lng: -149.4937,
                            }, // Alaska (Fairbanks)
                            end: {
                                lat: 34.0522,
                                lng: -118.2437,
                            }, // Los Angeles
                        },
                        {
                            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                        },
                        {
                            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                        },
                        {
                            start: { lat: 51.5074, lng: -0.1278 }, // London
                            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                        },
                        {
                            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
                        },
                        {
                            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                        },
                    ]}
                />

            </div>
        </div>
    )
}