'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Smooth spring physics for trailing effect
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        window.addEventListener('mousemove', moveCursor);
        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, [mouseX, mouseY, isVisible]);

    // Hide on mobile/touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

    return (
        <>
            {/* Main Dot */}
            <motion.div
                className="fixed top-0 left-0 w-[8px] h-[8px] bg-white rounded-full pointer-events-none z-[9999] mix-blend-exclusion -ml-[4px] -mt-[4px]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    opacity: isVisible ? 1 : 0,
                }}
            />

            {/* Trailing Outline */}
            <motion.div
                className="fixed top-0 left-0 w-[40px] h-[40px] border border-white/50 rounded-full pointer-events-none z-[9999] mix-blend-exclusion -ml-[20px] -mt-[20px]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{ type: "spring", mass: 0.6 }}
            />
        </>
    );
}
