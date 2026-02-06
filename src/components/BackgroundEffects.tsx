'use client';
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function BackgroundEffects() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Ultra-smooth floating physics
    const springConfig1 = { damping: 45, stiffness: 60, mass: 1 };
    const springConfig2 = { damping: 55, stiffness: 40, mass: 2 };
    const springConfig3 = { damping: 70, stiffness: 25, mass: 3 };

    const glow1X = useSpring(mouseX, springConfig1);
    const glow1Y = useSpring(mouseY, springConfig1);

    const glow2X = useSpring(mouseX, springConfig2);
    const glow2Y = useSpring(mouseY, springConfig2);

    const glow3X = useSpring(mouseX, springConfig3);
    const glow3Y = useSpring(mouseY, springConfig3);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Primary Glow - Soft White/Silver Core */}
            <motion.div
                className="absolute w-[500px] h-[500px] bg-white/10 blur-[100px] rounded-full -left-[250px] -top-[250px]"
                style={{
                    x: glow1X,
                    y: glow1Y,
                }}
            />

            {/* Secondary Glow - Slate / Muted Blue-Grey */}
            <motion.div
                className="absolute w-[800px] h-[800px] bg-slate-500/10 blur-[150px] rounded-full -left-[400px] -top-[400px]"
                style={{
                    x: glow2X,
                    y: glow2Y,
                }}
            />

            {/* Deep Ambient Aura - Steel Grey */}
            <motion.div
                className="absolute w-[1200px] h-[1200px] bg-zinc-600/[0.05] blur-[200px] rounded-full -left-[600px] -top-[600px]"
                style={{
                    x: glow3X,
                    y: glow3Y,
                }}
            />

            {/* Static Ambient Gradients - Deep Charcoal tones */}
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-zinc-900/[0.1] blur-[150px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-slate-900/[0.1] blur-[150px] rounded-full" />
        </div>
    );
}
