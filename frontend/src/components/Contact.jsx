import React, { useState, useRef, useEffect } from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin } from 'react-icons/fi';
import AvailabilityCard from './AvailabilityCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
    const contactRef = useRef(null); // Added ref

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('idle');

    function handleNameChange(e) { setName(e.target.value); }
    function handleEmailChange(e) { setEmail(e.target.value); }
    function handleMessageChange(e) { setMessage(e.target.value); }
    function resetForm() { setStatus('idle'); }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('loading');
        try {
            const API = "https://portfolio-backend-xpqf.onrender.com/api/contact";
            const res = await fetch(API, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            });

            if (res.ok) {
                setStatus('success');
                setName('');
                setEmail('');
                setMessage('');
            } else throw new Error();
        } catch (err) {
            setStatus('error');
            console.error("Error:", err);
        }
    }

    // Scroll Animation using GSAP
    useEffect(() => {
        if (contactRef.current) {
            gsap.fromTo(
                contactRef.current,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: contactRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }
    }, []);

    return (
        <>
            <footer
                ref={contactRef}
                id='contact'
                className="bg-background text-foreground px-6 py-8 border border-gray-300 dark:border-gray-700 rounded-xl shadow-xl transition-colors"
                style={{ borderBottomWidth: '0.5px' }}
            >
                <div className="mb-6">
                    <AvailabilityCard />
                </div>

                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch justify-between gap-8">

                    {/* Left - Contact Info */}
                    <div className="w-full md:w-1/2 flex flex-col justify-between h-full">
                        <div>
                            <h2 className="text-2xl font-semibold mb-5">Contact Information</h2>

                            <div className="space-y-3">
                                {[
                                    { icon: FiMapPin, label: "Location", value: "hanumangarh,rajasthan, India" },
                                    { icon: FiMail, label: "Email", value: "ravi.mrvr@gmail.com" },
                                    { icon: FiPhone, label: "Phone", value: "8058486203" },
                                    { icon: FiLinkedin, label: "LinkedIn", value: <a href="https://www.linkedin.com/in/raviverma204" target="_blank" rel="noreferrer" className="underline hover:text-primary transition">linkedin.com/in/Ravi Kumar</a> }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-muted/20 dark:bg-[#1a1a1a] rounded-lg p-4 shadow-sm">
                                        <div className="p-3 bg-muted/30 dark:bg-[#222222] rounded-full">
                                            <item.icon size={18} className="text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase text-muted-foreground">{item.label}</p>
                                            <p className="text-sm text-foreground font-medium">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right - Contact Form */}
                    <div className="w-full md:w-1/2 flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>

                            {status === 'success' ? (
                                <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 border border-green-500 rounded-lg p-5 text-center h-full flex flex-col justify-center">
                                    <div className="flex justify-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-10 w-10 text-green-500">
                                            <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                            <path d="m9 11 3 3L22 4" />
                                        </svg>
                                    </div>
                                    <h4 className="text-md font-semibold mb-1">Message Sent Successfully!</h4>
                                    <p className="text-sm mb-3">Thank you for reaching out. I'll get back to you soon.</p>
                                    <button onClick={resetForm} className="px-4 py-2 rounded border border-white hover:bg-white hover:text-black transition">
                                        Send Another Message
                                    </button>
                                </div>
                            ) : status === 'error' ? (
                                <div className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 border border-red-500 rounded-lg p-5 text-center h-full flex flex-col justify-center">
                                    <h4 className="text-md font-semibold mb-1">Message Failed!</h4>
                                    <p className="text-sm mb-3">Please try again later.</p>
                                    <button onClick={resetForm} className="px-4 py-2 rounded border border-white hover:bg-white hover:text-black transition">
                                        Try Again
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4 flex flex-col gap-2 h-full justify-between">
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={handleNameChange}
                                        name="name"
                                        placeholder="Your name"
                                        required
                                        className="w-full px-4 py-3 bg-muted/20 dark:bg-[#1a1a1a] border border-border text-foreground rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                                    />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        name="email"
                                        placeholder="Your email"
                                        required
                                        className="w-full px-4 py-3 bg-muted/20 dark:bg-[#1a1a1a] border border-border text-foreground rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                                    />
                                    <textarea
                                        name="message"
                                        value={message}
                                        onChange={handleMessageChange}
                                        placeholder="Your message"
                                        required
                                        className="w-full px-4 py-3 bg-muted/20 dark:bg-[#1a1a1a] border border-border text-foreground rounded-lg shadow-sm h-28 resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                                    ></textarea>

                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className={`
                                            w-full flex items-center justify-center gap-2 
                                            px-6 py-3 rounded-lg font-medium 
                                            bg-muted/60 text-foreground border border-border
                                            backdrop-blur-sm shadow-sm
                                            transition-all duration-300
                                            hover:bg-muted/80 hover:shadow-[0_0_12px_rgba(34,197,94,0.4)]
                                            dark:hover:bg-[#1a1a1a]/80 
                                            disabled:opacity-60
                                        `}
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            'Submit Message'
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Contact;
