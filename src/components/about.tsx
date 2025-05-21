const AboutPage = () => {
    return (
        <div className="">
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="pt-[20vh] relative text-center py-16 px-4 md:px-8 bg-gradient-to-b from-[#f9f9ff] to-white">
                <h1 className="text-4xl md:text-5xl font-bold text-[#4c52ff] tracking-tight">
                   Fair, Fast & Foolproof.
                </h1>
                <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                   At Unbiass, we provide a platform that gives every student a fair chance to showcase their skills and every company a smarter way to discover real talent.
                </p>
            </section>

            {/* Our Mission */}
            <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    At Unbiass, we believe talent should speak louder than biasses. Our platform uses open source AI Models and Tested Machine Learnign algorithm combined with human assistance to ensure fair, transparent, and efficient remote hiring. We connect deserving candidates with companies seeking quality hires, eliminating bias and cheating while saving time and resources.
                </p>
            </section>

            {/* Our Story */}
            <section className=" bg-gray-50">
                <div className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                    <p>
                        Unbiass was born from a personal struggle. As a college student, our founder , Dhruv Mehta, applied to countless opportunities but faced rejections without a chance to prove his skills. He saw others bypass merit through cheating or unfair advantages, leading to demotivated talent and poor hiring outcomes.
                    </p>
                    <p>
                        In July 2024, Dhruv launched <strong>LC Police</strong>, an open-source AI Model trained  to detect cheating in coding contests on platform like LeetCode . With 2,000–5,000 views per contest day, it exposed the scale of unfair practices. This inspired Unbiass—a platform to rebuild remote hiring with integrity, giving every candidate a fair shot and companies reliable hires.
                    </p>
                </div>
                </div>
                
            </section>

            {/* Our Values */}
            <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">Our Core Values</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-600 list-none">
                    <li className="flex items-start space-x-3">
                        <span className="text-[#4c52ff] text-xl">•</span>
                        <div>
                            <strong>Equal Opportunity:</strong> Every candidate deserves a fair chance to shine, regardless of background or connections.
                        </div>
                    </li>
                    <li className="flex items-start space-x-3">
                        <span className="text-[#4c52ff] text-xl">•</span>
                        <div>
                            <strong>AI-Powered Integrity:</strong> Open Sourced AI models with 98% accuracy to  ensure cheating-free assessments.
                        </div>
                    </li>
                    <li className="flex items-start space-x-3">
                        <span className="text-[#4c52ff] text-xl">•</span>
                        <div>
                            <strong>Comprehensive Plagiarism Detection:</strong> Robust checks prevent unfair practices at every step.
                        </div>
                    </li>
                    <li className="flex items-start space-x-3">
                        <span className="text-[#4c52ff] text-xl">•</span>
                        <div>
                            <strong>Continuous Improvement:</strong> We adapt to feedback and evolving hiring needs with agility.
                        </div>
                    </li>
                </ul>
            </section>

                     {/* Founder Section */}
            <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">Meet Our Founder</h2>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-[15vmax] h-[15vmax]  rounded-full flex-shrink-0 shadow-lg">
                        <img src="https://res.cloudinary.com/dejvlvhlp/image/upload/v1747831824/IMG_9349_lefyow.jpg" className="rounded-full"/>
                    </div>
                    <div className="text-lg text-gray-600 leading-relaxed">
                        <p>
                            <strong>Dhruv Mehta</strong>, a full stack developer and CS graduate from India, founded Unbiass to solve a problem he lived through: unfair access to opportunities. Having faced rejections despite his skills, Dhruv built Unbiass to create a hiring process that’s transparent, merit-based, and foolproof, ensuring every candidate gets a fair chance and companies find the best talent.
                        </p>
                        <div className="mt-6 flex space-x-6">
                            <a href="https://www.linkedin.com/in/itzzdhruv/" className="text-[#4c52ff] hover:text-[#3a3fd9] font-medium transition">LinkedIn</a>
                            <a href="https://twitter.com/meMitocondria" className="text-[#4c52ff] hover:text-[#3a3fd9] font-medium transition">Twitter</a>
                            <a href="mailto:dhruvmehta382@email.com" className="text-[#4c52ff] hover:text-[#3a3fd9] font-medium transition">Email</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Makes Us Different */}
            <section className="py-16 px-4 md:px-8 bg-gray-50">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">Why Choose Unbiass?</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-6 leading-relaxed">
                    Unbiass stands out by combining empathy, innovation, and affordability to transform remote hiring.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-600 list-none max-w-5xl mx-auto">
                    <li className="flex items-start space-x-3">
                        <span className="text-[#4c52ff] text-xl">•</span>
                        <div>Empathy-driven: We understand the frustrations of both candidates and recruiters.</div>
                    </li>
                    <li className="flex items-start space-x-3">
                        <span className="text-[#4c52ff] text-xl">•</span>
                        <div>Fair pricing: Pay only for candidates you advance, not for every application.</div>
                    </li>
                    <li className="flex items-start space-x-3">
                        <span className="text-[#4c52ff] text-xl">•</span>
                        <div>Cost-effective: High-value solutions at a fraction of traditional hiring platform costs.</div>
                    </li>
                    <li className="flex items-start space-x-3">
                        <span className="text-[#4c52ff] text-xl">•</span>
                        <div>Proven AI: Our plagiarism detection, battle-tested by LC Police, ensures integrity.</div>
                    </li>
                    <li className="flex items-start space-x-3">
                        <span className="text-[#4c52ff] text-xl">•</span>
                        <div>Robust monitoring: Over 100 checks, from screen activity to behavioral analysis.</div>
                    </li>
                    <li className="flex items-start space-x-3">
                        <span className="text-[#4c52ff] text-xl">•</span>
                        <div>Adaptive technology: We stay ahead of new cheating tactics and recruiter demands.</div>
                    </li>
                </ul>
            </section>

   

            {/* Call to Action */}
            <section className="py-16 px-4 md:px-8 text-center bg-gray-50 rounded-xl shadow-xl max-w-5xl mx-auto my-[8vh]">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Fair , Cheat-Proof Hiring Awaits</h2>
                <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
                    Unbiass delivers smarter technology, fairer outcomes, and better ROI than traditional hiring platforms. 
                </p>
                <button className="mt-6 px-8 py-1 bg-[#4c52ff] text-white font-semibold rounded-full hover:bg-[#3a3fd9] transition shadow-md"  onClick={() => window.location.href = 'https://calendly.com/dhruvmehta382/30min'}>
                    Start Hiring
                </button>
            </section>
        </div>
    );
};

export default AboutPage;
