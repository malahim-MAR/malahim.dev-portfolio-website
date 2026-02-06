'use client';
import { motion } from 'framer-motion';
import { Layout, Server, Smartphone, Code2, Database, Palette } from 'lucide-react';

const skills = [
    {
        title: "Frontend & Mobile",
        icon: <Smartphone className="w-6 h-6" />,
        tags: ["React Native", "React.js", "Next.js", "Expo"],
        delay: 0.1
    },
    {
        title: "State & Data",
        icon: <Server className="w-6 h-6" />,
        tags: ["TanStack Query", "REST API", "JavaScript ES6+"],
        delay: 0.2
    },
    {
        title: "Backend & Dev",
        icon: <Database className="w-6 h-6" />,
        tags: ["Supabase", "Firebase", "Node.js", "PostgreSQL"],
        delay: 0.3
    },
    {
        title: "UI & Aesthetics",
        icon: <Palette className="w-6 h-6" />,
        tags: ["Tailwind CSS", "DaisyUI", "Bootstrap", "Framer Motion"],
        delay: 0.4
    }
];

export default function Skills() {
    return (
        <section className="py-32 px-6 bg-white/[0.01]">
            <div className="max-w-[1600px] mx-auto">
                <div className="mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-4 block"
                    >
                        Technical Prowess
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-heading font-extrabold text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-tighter"
                    >
                        Mastering the <br />
                        <span className="text-neutral-500">Modern Stack</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: skill.delay }}
                            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-slate-400/50 hover:bg-slate-400/5 transition-all duration-300 group"
                        >
                            <div className="mb-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-slate-300 group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-6">{skill.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skill.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 text-sm bg-white/5 rounded-full text-neutral-400 group-hover:text-white transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
