import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const experiences = [
    {
        id: 0,
        img: "/assets/Block.png",
        role: "AI & Tech Decentralized Intern",
        company: "BlockesBlock",
        date: "11 Aug- Present",
        desc: `I worked as an AI & Tech Decentralized Intern at BlockesBlock, where I contributed to the design,
 evaluation, and deployment of AI/ML models for real-world applications. My responsibilities included 
 optimizing large language models (LLMs), building user-friendly React-based solutions, and implementing 
 Web3 functionalities for decentralized applications.
I also focused on analyzing and improving AI-driven and blockchain-powered systems, while researching
emerging trends in AI, LLMs, and decentralized technologies to drive innovation within the team.`,
        skills: [
            "AI & Machine Learning Models",
            "Web3",
            "Blockchain (dApp development)",
            "Node.js",
            "Next.js",
            "MongoDB",
            "REST APIs",
            "Problem Solving & Research",
            "Git/GitHub",
            "Tailwind CSS",
            "JavaScript",
        ],
    },
    {
        id: 1,
        img: "/assets/Internshala.png",
        role: "Full Stack developer trainee ",
        company: "Internshala Training",
        date: "Dec 2024 - july 2025",
        desc: `I completed the Full Stack Development Placement Guarantee Training at Internshala, where I gained hands-on experience in JavaScript, React, Node.js, Express.js, MongoDB, and MySQL. During this training, I built real-world projects including an e-commerce application (ShoppyGlobe), an AI-powered movie search chat app, and a YouTube-inspired video platform. I also strengthened my problem-solving skills through DSA in JavaScript and worked with tools like Git, GitHub, Postman, and Thunder Client for version control and API testing. This training helped me develop industry-ready skills in frontend, backend, and full-stack web application development.`,
        skills: [
            "HTML",
            "CSS",
            "Git/GitHub",
            "Tailwind CSS",
            "JavaScript",
            "ReactJS",
            "Redux",
            "Node.js",
            "Express.js",
            "MongoDb",
            "REST APIs",
            "Problem Solving & Research"
        ],
    },
];

const Experience = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const targets = gsap.utils.toArray(".gsap-reveal");

        gsap.fromTo(
            targets,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="py-20 bg-background text-foreground transition-colors duration-300"
        >
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <div className="text-center mb-16 gsap-reveal">
                    <h2 className="text-4xl font-bold">EXPERIENCE</h2>
                    <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
                    <p className="text-gray-500 dark:text-gray-400 mt-4 text-lg font-semibold">
                        A collection of my work experience and the roles I have taken
                    </p>
                </div>

                {/* Timeline */}
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="gsap-reveal border border-gray-300 dark:border-gray-600 rounded-xl p-6 md:p-8 shadow-md bg-white dark:bg-gray-900"
                        >
                            {/* Header */}
                            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6">
                                {/* Logo */}
                                <div className="w-16 h-16 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-500 bg-white flex-shrink-0">
                                    <img
                                        src={exp.img}
                                        alt={`${exp.company} logo`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Details */}
                                <div className="flex flex-col mt-4 sm:mt-0">
                                    <h3 className="text-2xl font-semibold text-foreground">
                                        {exp.role}
                                    </h3>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">{exp.company}</span>
                                    <span className="text-sm text-gray-500 mt-1">{exp.date}</span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="mt-4 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                {exp.desc}
                            </p>

                            {/* Skills */}
                            <div className="mt-4">
                                <h5 className="font-medium text-foreground mb-2">Skills:</h5>
                                <ul className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill, i) => (
                                        <li
                                            key={i}
                                            className="px-3 py-1 text-sm border border-gray-400 dark:border-gray-600 bg-[#8245ec] text-white rounded-md"
                                        >
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
