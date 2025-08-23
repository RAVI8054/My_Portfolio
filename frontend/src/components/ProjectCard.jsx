
import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ProjectCard({ project }) {
    const cardRef = useRef(null);
    const scrollRef = useRef(null);
    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);

    const rotateX = useTransform(y, [0, 1], [15, -15]);
    const rotateY = useTransform(x, [0, 1], [-15, 15]);

    const glowColor = "rgba(34,197,94,0.9)";
    const [borders, setBorders] = useState({ top: false, right: false, bottom: false, left: false });
    const [showGlow, setShowGlow] = useState(false);
    const [inView, setInView] = useState(false);
    const [pauseScroll, setPauseScroll] = useState(false);
    const [hoveringImage, setHoveringImage] = useState(false);

    function handleMouseMove(e) {
        const rect = cardRef.current.getBoundingClientRect();
        const xVal = (e.clientX - rect.left) / rect.width;
        const yVal = (e.clientY - rect.top) / rect.height;

        x.set(xVal);
        y.set(yVal);

        const threshold = 0.15;
        setBorders({
            top: yVal < threshold,
            bottom: yVal > 1 - threshold,
            left: xVal < threshold,
            right: xVal > 1 - threshold,
        });

        if (!hoveringImage) setShowGlow(true);
    }

    function handleMouseLeave() {
        x.set(0.5);
        y.set(0.5);
        setBorders({ top: false, right: false, bottom: false, left: false });
        setShowGlow(false);
    }

    useEffect(function () {
        var interval;
        if (inView && !pauseScroll) {
            const el = scrollRef.current;
            interval = setInterval(function () {
                if (el.scrollTop >= el.scrollHeight - el.clientHeight) {
                    el.scrollTop = 0;
                } else {
                    el.scrollTop += 0.8;
                }
            }, 20);
        }
        return function () { clearInterval(interval); };
    }, [inView, pauseScroll]);

    useEffect(function () {
        const observer = new IntersectionObserver(function (entries) {
            setInView(entries[0].isIntersecting);
        }, { threshold: 0.3 });

        if (cardRef.current) observer.observe(cardRef.current);

        return function () {
            if (cardRef.current) observer.unobserve(cardRef.current);
        };
    }, []);

    const borderStyles = {
        borderTopWidth: borders.top ? "2px" : "0px",
        borderBottomWidth: borders.bottom ? "2px" : "0px",
        borderLeftWidth: borders.left ? "2px" : "0px",
        borderRightWidth: borders.right ? "2px" : "0px",
        borderColor: glowColor,
        borderStyle: "solid",
        borderRadius: "1rem",
    };

    useEffect(() => {
        if (cardRef.current) {
            gsap.fromTo(
                cardRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }
    }, []);

    return (
        <motion.section
            ref={cardRef}
            style={{
                ...borderStyles,
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: "preserve-3d",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative overflow-hidden bg-background text-foreground shadow-lg"
        >
            <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative z-10"
            >
                {showGlow && !hoveringImage && (
                    <motion.div
                        className="pointer-events-none absolute"
                        style={{
                            width: "450px",
                            height: "110px",
                            zIndex: 50,
                            left: (x.get() * 100) + "%",
                            top: (y.get() * 100) + "%",
                            translateX: "-50%",
                            translateY: "-50%",
                            background: "radial-gradient(circle, " + glowColor + ", transparent 70%)",
                            filter: "blur(60px)",
                            opacity: 0.8,
                        }}
                    />
                )}

                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row bg-white dark:bg-[#111111] rounded-2xl overflow-hidden shadow-xl">
                        <div
                            ref={scrollRef}
                            onMouseEnter={function () {
                                setPauseScroll(true);
                                setHoveringImage(true);
                                setShowGlow(false);
                            }}
                            onMouseLeave={function () {
                                setPauseScroll(false);
                                setHoveringImage(false);
                            }}
                            className="w-full md:w-1/2 h-[300px] md:h-[500px] overflow-y-auto border-b md:border-b-0 md:border-r border-gray-300 dark:border-gray-700 hide-scrollbar"
                        >
                            <div className="flex flex-col gap-2 p-2">
                                {project.images.map(function (src, index) {
                                    return (
                                        <img
                                            key={index}
                                            src={src}
                                            alt={"Preview " + (index + 1)}
                                            className="w-full object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-[1.03]"
                                        />
                                    );
                                })}
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 p-6 md:p-10 md:pb-3 space-y-6 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.techStack.map(function (tech) {
                                        return (
                                            <span
                                                key={tech}
                                                className="bg-gray-200 dark:bg-gray-800 text-sm text-black dark:text-white py-1 px-3 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <p className="font-semibold text-black dark:text-white text-lg">Key Features:</p>
                                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 text-sm">
                                    {project.features.map(function (feature, i) {
                                        return <li key={i}>{feature}</li>;
                                    })}
                                </ul>
                            </div>

                            <div className="flex gap-4 pb-2">
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onMouseEnter={function () {
                                        setPauseScroll(true);
                                        setHoveringImage(true);
                                        setShowGlow(false);
                                    }}
                                    onMouseLeave={function () {
                                        setPauseScroll(false);
                                        setHoveringImage(false);
                                    }}
                                    className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg font-medium transform transition duration-700 ease-in-out hover:scale-110 hover:bg-opacity-90 dark:hover:bg-gray-200"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-external-link mr-2 h-4 w-4"
                                    >
                                        <path d="M15 3h6v6" />
                                        <path d="M10 14 21 3" />
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    </svg>
                                    Live
                                </a>

                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onMouseEnter={function () {
                                        setPauseScroll(true);
                                        setHoveringImage(true);
                                        setShowGlow(false);
                                    }}
                                    onMouseLeave={function () {
                                        setPauseScroll(false);
                                        setHoveringImage(false);
                                    }}
                                    className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg font-medium transform transition duration-700 ease-in-out hover:scale-110 hover:bg-opacity-90 dark:hover:bg-gray-200 cursor-pointer"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-github mr-2 h-4 w-4"
                                    >
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48A13.38 13.38 0 0 0 12 2a13.38 13.38 0 0 0-4 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.73c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18.13V22" />
                                    </svg>
                                    GitHub
                                </a>
                                {/* same button or some thing for demo video link --- */}
                                {project.demoVideoUrl && (
                                    <a
                                        href={project.demoVideoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onMouseEnter={function () {
                                            setPauseScroll(true);
                                            setHoveringImage(true);
                                            setShowGlow(false);
                                        }}
                                        onMouseLeave={function () {
                                            setPauseScroll(false);
                                            setHoveringImage(false);
                                        }}
                                        className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg font-medium transform transition duration-700 ease-in-out hover:scale-110 hover:bg-opacity-90 dark:hover:bg-gray-200 cursor-pointer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-video mr-2 h-4 w-4"
                                        >
                                            <polygon points="23 7 16 12 23 17 23 7" />
                                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                                        </svg>
                                        Demo
                                    </a>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default ProjectCard;

