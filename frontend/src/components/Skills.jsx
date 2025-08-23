import { useEffect, useRef } from "react";
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap,
    FaGitAlt, FaGithub, FaNodeJs
} from "react-icons/fa";

import {
    SiNextdotjs, SiTailwindcss, SiMysql, SiMongodb,
    SiFigma, SiVercel, SiExpress
} from "react-icons/si";

import { MdApi } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Custom Render Icon
function RenderIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21"
            fill="currentColor"
            className="w-8 h-8 text-black dark:text-white"
        >
            <path d="M15.6491 0.00582604C12.9679 -0.120371 10.7133 1.81847 10.3286 4.373C10.3134 4.49154 10.2905 4.60627 10.2715 4.72099C9.67356 7.90268 6.88955 10.3119 3.5457 10.3119C2.35364 10.3119 1.23395 10.006 0.258977 9.47058C0.140914 9.40557 0 9.4897 0 9.62354V10.3081V20.6218H10.2677V12.8894C10.2677 11.4668 11.4178 10.3119 12.8346 10.3119H15.4015C18.3074 10.3119 20.6458 7.89121 20.5315 4.94662C20.4287 2.29649 18.2884 0.132023 15.6491 0.00582604Z" />
        </svg>
    );
}

function Skills() {
    const sectionRef = useRef(null);

    const frontendSkills = [
        { icon: FaJs, label: "JavaScript", className: "text-[#F7DF1E]" },
        { icon: FaReact, label: "React.js", className: "text-[#61DBFB]" },
        { icon: SiNextdotjs, label: "Next.js", className: "text-black dark:text-white" },
        { icon: FaHtml5, label: "HTML", className: "text-[#E34F26]" },
        { icon: FaCss3Alt, label: "CSS", className: "text-[#1572B6]" },
        { icon: SiTailwindcss, label: "Tailwind CSS", className: "text-[#38BDF8]" },
    ];

    const backendSkills = [
        { icon: FaNodeJs, label: "Node.js", className: "text-[#68A063]" },
        { icon: SiExpress, label: "Express.js", className: "text-[#999999]" },
        { icon: MdApi, label: "REST API", className: "text-[#4FC3F7]" },
        
    ];

    const databases = [
        { icon: SiMongodb, label: "MongoDB", className: "text-[#4DB33D]" },
    ];

    const tools = [
        { icon: FaGitAlt, label: "Git", className: "text-[#F1502F]" },
        { icon: FaGithub, label: "GitHub", className: "text-black dark:text-white" },
        { icon: SiFigma, label: "Figma", className: "text-[#A259FF]" },
        { icon: SiVercel, label: "Vercel", className: "text-black dark:text-white" },
        { icon: RenderIcon, label: "Render", isCustom: true },
    ];

    useEffect(function () {
        const sections = sectionRef.current.querySelectorAll(".skill-block");

        sections.forEach(function (block, index) {
            gsap.fromTo(block,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power3.out",
                    delay: index * 0.1,
                    scrollTrigger: {
                        trigger: block,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    }
                }
            );
        });
    }, []);

    return (
        <section id="skills" ref={sectionRef} className="py-8">
            <div className="max-w-6xl mx-auto space-y-16 md:px-0">
                {/* Header */}
                <div className="skill-block">
                    <h2 className="text-3xl font-bold mb-2">My Skills</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg">
                        Technologies and tools I&apos;ve worked with throughout my projects and experience
                    </p>
                </div>

                {/* Skill Groups */}
                {[["Front End", frontendSkills], ["Back End", backendSkills], ["Databases", databases], ["Tools & Platforms", tools]].map(function ([title, skillList]) {
                    return (
                        <div key={title} className="skill-block">
                            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                            <div className="flex flex-wrap gap-6">
                                {skillList.map(function (item) {
                                    return (
                                        <div key={item.label} className="flex flex-col items-center">
                                            <div
                                                className={`w-16 h-16 rounded-full bg-[#f9f9f9] dark:bg-[#1a1a1a] flex items-center justify-center text-4xl transform transition duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_12px_rgba(34,197,94,0.4)]`}
                                            >
                                                {item.isCustom ? <item.icon /> : <item.icon className={item.className} />}
                                            </div>
                                            <span className="mt-2 text-sm text-gray-600 dark:text-gray-300 font-medium">
                                                {item.label}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Skills;
