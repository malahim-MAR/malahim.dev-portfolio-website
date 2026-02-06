'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer id="contact" className="relative bg-black text-white min-h-[80vh] flex flex-col justify-between py-20 px-6 overflow-hidden">

            {/* Glow Effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1600px] mx-auto w-full z-10 flex-1 flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-8 block">Contact</span>
                    <h2 className="font-heading font-black text-[clamp(4rem,10vw,11rem)] leading-[0.85] tracking-tighter mb-12">
                        Let's build<br />
                        <span className="text-neutral-500">something</span><br />
                        legendary.
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-12 mb-12"
                >
                    <Link
                        href="mailto:hello@malahim.dev"
                        className="group inline-flex items-center gap-4 px-10 py-5 bg-white/5 border border-white/10 rounded-full text-2xl md:text-4xl font-medium hover:bg-white hover:text-black transition-all duration-300"
                    >
                        hello@malahim.dev
                        <ArrowUpRight size={32} className="group-hover:rotate-45 transition-transform duration-300" />
                    </Link>
                </motion.div>
            </div>

            <div className="max-w-[1600px] mx-auto w-full z-10 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                <div className="flex gap-6 text-sm text-neutral-400">
                    <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
                    <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
                    <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
                    <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
                </div>

                <div className="text-right">
                    <p className="text-neutral-500 text-sm">Based in Worldwide</p>
                    <p className="text-neutral-600 text-xs mt-1">&copy; 2026 Malahim. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
