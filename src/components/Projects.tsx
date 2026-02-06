'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        title: "Dropper - Delivery App",
        category: "Mobile Application",
        description: "A delivery management mobile application built using React Native, designed to handle real-world logistics workflows with live location tracking and real-time chat.",
        image: "https://images.unsplash.com/photo-1526367790999-015078648c7e?auto=format&fit=crop&q=80&w=1200",
        link: "#",
        tech: ["React Native", "Expo", "TanStack Query", "REST API"]
    },
    {
        title: "Admin Panel - Dropper",
        category: "Web Dashboard",
        description: "An admin dashboard developed using Next.js to manage operations of the Dropper delivery platform, featuring driver verification workflows and real-time monitoring.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        link: "#",
        tech: ["Next.js", "Tailwind CSS", "Role-based Access", "Analytics"]
    },
    {
        title: "Project Management System",
        category: "Web Application",
        description: "A web-based project management system developed to replace manual Excel-based workflows for an agency, featuring real-time chat and automated performance reports.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        link: "#",
        tech: ["React", "Tailwind CSS", "TanStack Query", "PDF Generation"]
    },
    {
        title: "Blogging App With Dashboard",
        category: "Hobby Project",
        description: "A blogging platform with an admin-style dashboard for content management, user roles, and integrated backend services for data storage.",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200",
        link: "#",
        tech: ["Next.js", "Tailwind CSS", "DaisyUI", "Auth"]
    }
];

export default function Projects() {
    return (
        <section id="work" className="py-32 px-6 max-w-[1600px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                <div>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-4 block"
                    >
                        Selected Works
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-heading font-extrabold text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-tighter"
                    >
                        Featured <br />
                        <span className="text-neutral-500">Development</span> Projects
                    </motion.h2>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                >
                    <button className="px-8 py-4 rounded-full border border-white/10 text-sm font-medium hover:bg-white hover:text-black transition-all">
                        View All Projects
                    </button>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 gap-32">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="group relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    >
                        {/* Project Info */}
                        <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                            <span className="text-sm font-medium text-neutral-500 mb-4 block">
                                0{index + 1} / {project.category}
                            </span>
                            <h3 className="text-4xl md:text-6xl font-black mb-6 group-hover:text-slate-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-xl text-neutral-400 mb-8 max-w-lg leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-3 mb-10">
                                {project.tech.map(t => (
                                    <span key={t} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-neutral-300">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <motion.a
                                href={project.link}
                                whileHover={{ x: 10 }}
                                className="inline-flex items-center gap-2 text-lg font-bold group/link"
                            >
                                View Case Study
                                <ArrowUpRight className="group-hover/link:rotate-45 transition-transform" />
                            </motion.a>
                        </div>

                        {/* Project Image */}
                        <div className={`relative aspect-[16/10] rounded-3xl overflow-hidden cursor-pointer ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
