'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

    const lineVariants = {
        hidden: { width: 0 },
        visible: {
            width: "100%",
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const textReveal = {
        hidden: { y: "100%" },
        visible: {
            y: 0,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const experienceItems = [
        {
            year: "2023 - Present",
            title: "Full Stack Developer",
            desc: "Freelance & Contract • Building complex web applications and mobile solutions using Next.js and React Native.",
            active: true
        },
        {
            year: "2021 - 2023",
            title: "Frontend Developer",
            desc: "Agency Work • Specializing in building high-performance Shopify custom themes and React applications.",
            active: false
        }
    ];

    return (
        <motion.section
            id="about"
            ref={containerRef}
            style={{ opacity, scale }}
            className="py-32 px-6 max-w-[1600px] mx-auto min-h-screen"
        >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-32 items-start">

                {/* Sticky Sidebar */}
                <div className="hidden lg:block lg:sticky lg:top-0 lg:h-screen">
                    <div className="h-full flex flex-col justify-top">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-4 block"
                            >
                                About Me
                            </motion.span>
                            <div className="overflow-hidden">
                                <motion.h2
                                    variants={textReveal}
                                    className="font-heading font-extrabold text-[clamp(3.5rem,8vw,6rem)] leading-[0.9] tracking-tighter"
                                >
                                    Beyond <br />
                                    <span className="text-neutral-500">The Code.</span>
                                </motion.h2>
                            </div>
                            <motion.div
                                variants={lineVariants}
                                className="h-[1px] bg-gradient-to-r from-slate-400/50 to-transparent mt-8"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="space-y-32">

                    {/* Section 1: Philosophy */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-8 flex items-center gap-4">
                            01 / Philosophy
                            <span className="h-[1px] w-12 bg-slate-800" />
                        </h3>
                        <p className="text-2xl md:text-4xl text-neutral-300 leading-tight font-light tracking-tight max-w-3xl">
                            I believe that <strong className="text-white font-medium">great software</strong> is born at the intersection of robust engineering
                            and <span className="text-slate-400 italic font-serif">premium aesthetics</span>. I don't just write code; I build digital experiences that solve real problems.
                        </p>
                    </motion.div>

                    {/* Section 2: Experience */}
                    <div className="space-y-12">
                        <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-12 flex items-center gap-4"
                        >
                            02 / Experience
                            <span className="h-[1px] w-12 bg-slate-800" />
                        </motion.h3>

                        <div className="relative border-l border-slate-800/50 pl-12 space-y-24 py-4">
                            {/* Animated Progress Line */}
                            <motion.div
                                style={{ scaleY: scrollYProgress }}
                                className="absolute left-[-1px] top-0 w-[1px] h-full bg-slate-400 origin-top z-10"
                            />

                            {experienceItems.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                                    className="relative"
                                >
                                    {/* Dot */}
                                    <div className={`absolute -left-[53px] top-2 w-[11px] h-[11px] rounded-full ring-4 ring-black z-20 transition-colors duration-500 ${item.active ? 'bg-slate-300' : 'bg-slate-800'}`} />

                                    <span className="text-sm font-mono text-slate-500 mb-4 block underline decoration-slate-800 underline-offset-8 italic">
                                        {item.year}
                                    </span>
                                    <h4 className="text-3xl font-bold text-white mb-4 tracking-tight">{item.title}</h4>
                                    <p className="text-xl text-neutral-400 max-w-xl leading-relaxed font-light">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Section 3: Process */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="p-12 md:p-20 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group"
                    >
                        {/* Decorative background number */}
                        <span className="absolute -right-10 -bottom-20 text-[20rem] font-black text-white/[0.02] pointer-events-none select-none">
                            03
                        </span>

                        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-12">Process</h3>
                        <p className="text-2xl md:text-3xl text-neutral-300 leading-snug font-light max-w-2xl">
                            It starts with understanding the 'Why'. From there, I move to architecture, prototyping, and iterative development.
                            I prioritize <strong className="text-white font-medium underline decoration-slate-500 underline-offset-8">clean, maintainable code</strong> over quick hacks.
                        </p>
                    </motion.div>

                </div>
            </div>
        </motion.section>
    );
}
