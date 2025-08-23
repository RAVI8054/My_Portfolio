import { useRef, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import FloatingIcons from "./FloatingIcons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
    const aboutRef = useRef(null);

    useEffect(function () {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top 80%", // When top of section hits 80% of viewport
                toggleActions: "play none none none", // Play animation once
            }
        });

        tl.fromTo(aboutRef.current.querySelectorAll(".reveal"),
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
        );

    }, []);

    return (
        <section ref={aboutRef} id="about" className="py-20 bg-background text-foreground transition-colors duration-300">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 md:gap-20">

                {/* Left Section */}
                <div className="md:w-full space-y-6">
                    <h2 className="reveal text-4xl font-bold">Hii, Ravi Kumar 👋</h2>
                    <p className="reveal text-lg text-primary font-semibold">FullStack Developer</p>

                    <div className="reveal flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 text-sm">
                        <div className="flex items-center gap-2">
                            <FaEnvelope className="text-base text-foreground" />
                            <a href="mailto:ravi.mrvr@gmail.com" className="hover:underline break-all">
                                ravi.mrvr@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-base text-red-500" />
                            <span>Hanumangarh,Rajasthan,India</span>
                        </div>
                    </div>

                    <p className="reveal text-base leading-relaxed text-gray-700 dark:text-gray-300">
                        I build complete web applications — frontend, backend, and everything in between. What I love most is turning ideas into functional, user-friendly experiences. I’m always exploring new technologies and focused on writing clean, efficient, and maintainable code.
                    </p>

                    <div className="reveal flex flex-wrap items-center gap-4 mt-4">
                        <a
                            href="/assets/RaviKumar.pdf"
                            download
                            className="px-4 py-2 bg-primary text-black dark:text-white rounded-lg border border-gray-400 shadow-md text-sm sm:text-base flex items-center gap-2 transition duration-300 hover:bg-white hover:text-black dark:hover:bg-gray-100 dark:hover:text-black"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="transition-transform duration-300">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Resume
                        </a>

                        <div className="flex gap-3 text-xl text-foreground">
                            {[
                                { href: "https://github.com/RAVI8054", icon: <FaGithub /> },
                                { href: "https://www.linkedin.com/in/raviverma204", icon: <FaLinkedin className="text-blue-600 dark:text-blue-400" /> },
                                { href: "mailto:ravi.mrvr@gmail.com", icon: <FaEnvelope className="text-black dark:text-gray-400" /> },
                            ].map(function (social, index) {
                                return (
                                    <a key={index} href={social.href} target="_blank" rel="noopener noreferrer"
                                        className="p-2 rounded-md border border-gray-400 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transform transition duration-300 ease-in-out hover:scale-110 hover:shadow-md">
                                        <div className="transition-transform duration-300 ease-in-out">
                                            {social.icon}
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Right Section - Floating Icons */}
                <div className="reveal md:w-1/2 w-full flex justify-center sm:justify-start">
                    <FloatingIcons />
                </div>
            </div>
        </section>
    );
}

export default About;
