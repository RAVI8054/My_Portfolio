import React, { useRef, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Footer() {
    const footerRef = useRef(null);

    useEffect(() => {
        if (footerRef.current) {
            gsap.fromTo(
                footerRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }
    }, []);

    return (
        <footer
            ref={footerRef}
            className="mt-16 px-6 py-6 text-center bg-gradient-to-b from-transparent to-muted/10 dark:to-[#111] transition-colors"
        >
            <div className="w-xl mx-auto space-y-4">

                {/* Name & Role */}
                <h2 className="text-2xl font-bold text-foreground">
                   Ravi Kumar
                </h2>

                <p className="text-sm text-muted-foreground text-center [text-shadow:_0_1px_6px_rgba(34,197,94,0.2)] px-4">
                    Crafting seamless user experiences & building meaningful digital products.
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-5 mt-4">
                    <a href="https://github.com/RAVI8054" target="_blank" rel="noreferrer" className="p-3 rounded-lg bg-muted/40 dark:bg-[#1a1a1a] hover:bg-muted/60 dark:hover:bg-[#222] transition shadow-md">
                        <FiGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/raviverma204" target="_blank" rel="noreferrer" className="p-3 rounded-lg bg-muted/40 dark:bg-[#1a1a1a] hover:bg-muted/60 dark:hover:bg-[#222] transition shadow-md">
                        <FiLinkedin size={20} />
                    </a>
                    <a href="mailto:ravi.mrvr@gmail.com" className="p-3 rounded-lg bg-muted/40 dark:bg-[#1a1a1a] hover:bg-muted/60 dark:hover:bg-[#222] transition shadow-md">
                        <FiMail size={20} />
                    </a>
                </div>

                {/* Divider & Heart */}
                <div className="flex items-center justify-center gap-2 my-5">
                    <hr className="w-1/5 border-muted-foreground/40" />
                    <span className="text-red-500">❤️</span>
                    <hr className="w-1/5 border-muted-foreground/40" />
                </div>

                {/* Copyright */}
                <p className="text-xs text-muted-foreground">
                    © 2025 Ravi kumar. All rights reserved.
                </p>
                <p className="text-xs text-muted-foreground">
                    Built with React & GSAP — Designed thoughtfully, coded carefully.
                </p>

                {/* Back to Top */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="mt-6 inline-flex items-center gap-2 text-xs md:text-sm font-medium
                        px-4 py-2 rounded-lg border border-border
                        bg-muted/10 backdrop-blur-sm
                        hover:bg-muted/20 dark:hover:bg-[#222]
                        hover:shadow-[0_0_10px_rgba(34,197,94,0.2)]
                        transition-all duration-300
                        text-muted-foreground"
                >
                    <FiArrowUp className="h-4 w-4 text-primary" />
                    Back to Top
                </button>
            </div>
        </footer>
    );
}

export default Footer;
