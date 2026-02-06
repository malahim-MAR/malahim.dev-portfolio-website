'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, ArrowUpRight, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer id="contact" className="py-32 px-6 border-t border-white/5 relative overflow-hidden">
            <div className="max-w-[1600px] mx-auto relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-8 block"
                    >
                        Ready to start a project?
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-heading font-extrabold text-[clamp(2.5rem,10vw,8rem)] leading-[0.8] mb-12 tracking-tighter"
                    >
                        Let&apos;s build something <br />
                        <span className="text-neutral-500">extraordinary.</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-12 mb-12"
                    >
                        <Link
                            href="mailto:malahimbinharoon@gmail.com"
                            className="group relative inline-flex items-center gap-4 px-12 py-6 rounded-full bg-white text-black font-bold text-xl hover:scale-105 transition-transform duration-300"
                        >
                            malahimbinharoon@gmail.com
                            <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
                        </Link>
                    </motion.div>

                    <div className="flex flex-col md:flex-row gap-8 mt-12 items-center">
                        <div className="flex items-center gap-3 text-slate-400">
                            <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                                <Phone className="w-4 h-4" />
                            </span>
                            +92 348 2419504
                        </div>
                    </div>

                    <div className="flex gap-8 mt-16">
                        {[
                            { name: 'Github', icon: <Github />, href: 'https://github.com/Malahim-MAR' },
                            { name: 'Linkedin', icon: <Linkedin />, href: 'https://linkedin.com/in/malahim-bin-haroon' },
                            { name: 'Twitter', icon: <Twitter />, href: '#' },
                            { name: 'Mail', icon: <Mail />, href: 'mailto:malahimbinharoon@gmail.com' },
                        ].map((social) => (
                            <Link
                                key={social.name}
                                href={social.href}
                                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all duration-300"
                            >
                                {social.icon}
                            </Link>
                        ))}
                    </div>

                    <p className="mt-24 text-slate-500 text-sm font-mono">
                        © 2026 Malahim Bin Haroon. All rights reserved. Built with Next.js & Framer Motion.
                    </p>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-slate-500/10 blur-[120px] rounded-full -z-10" />
        </footer>
    );
}
