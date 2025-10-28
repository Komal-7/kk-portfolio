import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export function Contact(){
    return (
        <section
            id="contact"
            className="flex flex-col items-center justify-center min-h-[80vh] mt-10 text-white scroll-mt-20"
        >
            <div className="max-w-2xl mx-auto text-center space-y-6">
                <p className="text-4xl font-bold tracking-tight text-[#7F9574] dark:text-[#039275] sm:text-5xl">
                    Get in Touch
                </p>
                <p className="mt-4 text-lg text-[#283648] dark:text-gray-300">
                    I’m actively looking for new opportunities to contribute and grow.
                    Whether it’s a project, collaboration, or just a quick chat — feel free
                    to reach out!
                </p>
            </div>

            <div className="mt-10 bg-[#EAEDE8] text-[#7F9574] hover:bg-[#D0D7CB] dark:bg-[#1F2937] dark:text-[#039275] dark:hover:bg-[#41536d] transition-colors duration-300 rounded-2xl px-8 py-4 text-center shadow-lg">
                <div className="flex items-center gap-3">
                    <FaEnvelope className="text-xl" />
                    <span className="text-base md:text-lg">kkiri@csu.fullerton.edu</span>
                </div>
            </div>

            <div className="mt-8">
                <a
                href="mailto:kkiri@csu.fullerton.edu"
                target="_blank"
                rel="noopener noreferrer"
                >
                <button
                    className="cursor-pointer bg-[#7F9574] text-white hover:bg-[#657a5c] dark:bg-[#039275] dark:hover:bg-[#027666] px-6 py-3 rounded-lg font-medium shadow-md transition-colors duration-300"
                >
                    Say Hello 👋
                </button>
                </a>
            </div>

        </section>
    )
}