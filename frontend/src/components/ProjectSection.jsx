import React from "react";
import ProjectCard from "./ProjectCard"

function ProjectsSection() {
    return (
        <section id="projects" className="py-20 bg-background text-foreground">
            <div className="max-w-6xl mx-auto sm:px-0 md:px-0 lg:px-0">
                {/* Single Heading at Top */}
                <h2 className="text-4xl font-bold mb-16 text-start">Projects</h2>

                {/* All  projects below */}
                <div className="space-y-20">
                    <ProjectCard
                        project={{
                            title: "MyTube (YouTube Clone)",
                            description:
                                "A full-stack YouTube clone built with video uploading, playback, user channels, likes, comments, and authentication. Users can explore trending videos, search content, and subscribe to channels.",
                            images: [
                                "/assets/yt 1.png",
                                "/assets/yt 2.png",
                                "/assets/yt 3.png",
                                "/assets/yt 4.png",
                                "/assets/yt 5.png",
                                "/assets/yt 6.png",
                                "/assets/yt 7.png",
                                "/assets/yt 8.png",

                            ],
                            techStack: [
                                "React",
                                "Node.js",
                                "Express",
                                "MongoDB",
                                "Tailwind CSS",
                                "JWT Auth",
                                "Cloudinary",
                            ],
                            features: [
                                "Video upload with thumbnail and title",
                                "User authentication and JWT token system",
                                "Like, comment, and subscribe functionality",
                                "Trending, search, and video playback",
                                "Channel dashboard for managing content",
                            ],
                            liveUrl: "https://you-tube-dssm1xhzr-ravi-kumars-projects-5dba0fe6.vercel.app/",
                            githubUrl: "https://github.com/RAVI8054/YouTube",
                            demoVideoUrl: "#"

                        }}
                    />

                    <ProjectCard
                        project={{
                            title: "Shoppy Globe",
                            description:
                                "A complete e-commerce platform with product listings, cart, and payment integration. Users can explore categories, view detailed product pages, and place orders smoothly.",
                            images: [
                                "/assets/shoppy 1.png",
                                "/assets/shoppy 2.png",
                                "/assets/shoppy 3.png",
                            ],
                            techStack: [
                                "React",
                                "Redux",
                                "Tailwind CSS",
                                "Express",
                                "MongoDB",
                                "Stripe API",
                            ],
                            features: [
                                "Product catalog with category-based filtering",
                                "Interactive cart with add/remove functionality",
                                "Responsive product detail pages with dynamic routing",
                                "Modern and responsive UI with Tailwind CSS",
                                "Built using React and Redux for state management"
                            ],
                            liveUrl: "https://shoppy-globe-e-commerce-fronted.vercel.app/",
                            githubUrl: "https://github.com/RAVI8054/ShoppyGlobe-E-commerce-Fronted"
                        }}
                    />

                    <ProjectCard
                        project={{
                            title: "Online Library System",
                            description:
                                "Manage and add books with category-based browsing and real-time search. Seamlessly track borrowings with authentication and dashboard control",
                            images: [
                                "/assets/library 2.png",
                                "/assets/library 3.png",
                                "/assets/library 4.png",
                                "/assets/library 5.png",

                            ],
                            techStack: [
                                "React",
                                "Node.js",
                                "Express",
                                "MongoDB",
                                "Tailwind CSS",
                            ],
                            features: [
                                "Add new books and maintain an up-to-date catalog",
                                "Display and browse all books with search by author and category",
                                "Efficient search functionality for quick filtering",
                                "Responsive, user-friendly interface for library browsing",
                                "Open-access system allowing anyone to view and manage the book catalog"
                            ],
                            liveUrl: "https://online-library-system-chi.vercel.app/",
                            githubUrl: "https://github.com/RAVI8054/Online_Library_System",
                        }}
                    />


                    <ProjectCard
                        project={{
                            title: "AI Web Movie Chatbot",
                            description: `
                            This project is an AI-powered movie search chat application that combines natural language understanding with intelligent query handling
                            `,
                            images: [
                                "/assets/hang 1.png",
                                "/assets/hangman 2.png",
                                "/assets/hangman 3.png",
                            ],
                            techStack: ["LangChain", "Groq", "JavaScript", "RESTapi", "MongoDB", "React", "Tool Calling"],
                            features: [
                                "Implemented intelligent route detection to auto-handle user intent such as title-based, genre, rating, and year-based movie searches",
                                "Built a smart backend architecture where AI interprets messages and interacts with specific search routes for optimized database querying",
                                "Integrated LLMs to autonomously parse and trigger relevant search routes without manual input mapping.",
                            ],
                            liveUrl: "https://ai-powered-movie-search-chat-app-in.vercel.app/",
                            githubUrl: "https://github.com/RAVI8054/AI-Powered-Movie-Search-Chat-App-in-db"
                        }}
                    />
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;
