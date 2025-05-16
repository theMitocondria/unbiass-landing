const formUrl = import.meta.env.VITE_DEMO_URL
export default function FeaturePage() {
    return (
        <div className="px-[12vw] mt-12 bg-white text-2xl font-bold text-slate-700 md:text-2xl lg:text-4xl  px-6 py-12">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="">
                    <p className="text-sm font-medium text-[#4c52ff] mb-2">Tech.Smart.Hiring</p>
                    <h1 className="text-2xl font-bold text-slate-700 md:text-2xl lg:text-4xl  font-bold mb-6 leading-tight">
                        The Ultimate Cheat-Proof <br /> Online Assessment System
                    </h1>
                    <p className="text-[2vh] font-[400] mb-8">
                        Say goodbye to dishonest hiring. Our Online Assessment system is engineered from the ground up to eliminate cheating and deliver a fair, rigorous evaluation environment.
                    </p>

                    <div className="mt-10">
                        <button className="w-60 transform rounded-full text-[2vh] border border-[#4c52ff] bg-white px-6 py-2 font-medium text-[#4c52ff] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 cursor-pointer"
                            onClick={() => window.location.href = `${formUrl}`}>
                            Book a Demo
                        </button>
                    </div>
                </div>

                <div className="w-full">
                    <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.youtube.com/embed/jcJ06HzR5_M"
                            title="OA Demo Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
