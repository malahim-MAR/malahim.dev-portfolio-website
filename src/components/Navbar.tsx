'use client';
import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: -100 }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 left-0 w-full z-50 flex justify-center px-6 transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-8'}`}
        >
            <nav className={`
        relative flex items-center justify-between px-6 py-3 rounded-full 
        transition-all duration-300 border border-white/10
        ${scrolled
                    ? 'bg-black/80 backdrop-blur-xl shadow-lg border-white/10 w-full max-w-5xl'
                    : 'bg-transparent border-transparent w-full max-w-[1600px]'}
      `}>

                {/* Logo */}
                <Link href="/" className="text-xl font-bold tracking-tight z-10">
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-neutral-400">
                        Malahim
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {['Work', 'About', 'Contact'].map((item) => (
                        <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                            {item}
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-4">
                    <Link
                        href="mailto:hello@malahim.dev"
                        className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 transition-transform"
                    >
                        <span>Let's Talk</span>
                        <ArrowUpRight size={16} />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2 text-white">
                        <Menu size={24} />
                    </button>
                </div>
            </nav>
        </motion.header>
    );
}
