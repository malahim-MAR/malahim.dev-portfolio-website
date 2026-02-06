'use client';
import { motion } from 'framer-motion';

export default function Hero() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { y: "100%", rotate: 5, opacity: 0 },
        show: {
            y: 0,
            rotate: 0,
            opacity: 1,
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-32 pb-20">

            {/* Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-12 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-500/10 border border-slate-500/20 text-slate-400 font-semibold"
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-500"></span>
                </span>
                Available for new projects
            </motion.div>

            {/* Main Title */}
            <motion.h1
                variants={container}
                initial="hidden"
                animate="show"
                className="font-heading font-extrabold text-[clamp(4rem,15vw,12rem)] leading-[0.9] tracking-tighter text-center flex flex-col items-center z-10"
            >
                <div className="overflow-hidden">
                    <motion.span variants={item} className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 pb-4">
                        Build Better.
                    </motion.span>
                </div>
                <div className="overflow-hidden">
                    <motion.span variants={item} className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 pb-4">
                        Ship Faster.
                    </motion.span>
                </div>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="mt-12 text-xl text-neutral-400 max-w-2xl text-center leading-relaxed"
            >
                React Native & Frontend Developer focused on building immersive mobile and digital experiences
                that combine robust engineering with premium aesthetics.
            </motion.p>

            {/* Star Elements (Decor) */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-[15%] w-24 h-24 bg-white/5 blur-3xl rounded-full"
            />
        </section>
    );
}
