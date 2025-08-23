// import { motion as Motion } from "framer-motion";
import { motion as Motion } from "framer-motion";

// import motion from "framer-motion"
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss } from "react-icons/si";

const techStack = [
    { icon: <SiReact />, color: "#61DAFB", name: "React", position: "top-left" },
    { icon: <SiNodedotjs />, color: "#3C873A", name: "Node.js", position: "top-right" },
    { icon: <SiMongodb />, color: "#4DB33D", name: "MongoDB", position: "bottom-left" },
    { icon: <SiTailwindcss />, color: "#38BDF8", name: "Tailwind", position: "bottom-right" },
];

function FloatingIcons() {
    // console.log(motion.a);
    return (
        <div className="grid grid-cols-2 gap-y-10 place-items-start w-[350px] h-full">
            {techStack.map(function (tech, index) {
                return (
                    <Motion.div
                        key={tech.name}
                        className="relative w-28 h-28 flex items-center justify-center"
                        animate={{
                            y: [0, -6, 0],
                            scale: [1, 1.05, 1],
                            rotate: [0, 3, -3, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                            delay: index * 0.3,
                        }}
                    >
                        {/* Label floating outside the icon box */}
                        <Motion.div
                            className={`absolute text-white text-sm font-medium px-3 py-[3px] rounded-full bg-black shadow border-2 border-gray-800
                                ${tech.position === "top-left" && "-top-7 -left-6"}
                                ${tech.position === "top-right" && "-top-7 -right-8"}
                                ${tech.position === "bottom-left" && "-bottom-7 -left-7"}
                                ${tech.position === "bottom-right" && "-bottom-7 -right-6"}
                            `}
                            animate={{ y: [0, -2, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "mirror",
                                delay: index * 0.4,
                            }}
                        >
                            {tech.name}
                        </Motion.div>

                        {/* Icon Box with glow & shadow */}
                        <div
                            className="w-full h-full rounded-2xl bg-[#1f1f1f] flex items-center justify-center"
                            style={{
                                color: tech.color,
                                boxShadow: `0 0 10px ${tech.color}80,  0 0 11px ${tech.color}44`,
                            }}
                        >
                            <Motion.div
                                className="text-4xl"
                                animate={{ rotate: 360 }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 15,
                                    ease: "linear",
                                }}
                            >
                                {tech.icon}
                            </Motion.div>
                        </div>
                    </Motion.div>
                );
            })}
        </div>
    );
}

export default FloatingIcons;
