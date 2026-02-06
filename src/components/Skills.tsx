'use client';
import { motion } from 'framer-motion';
import { Layout, Server, Smartphone } from 'lucide-react';

const skills = [
    {
        title: "Frontend",
        icon: <Layout size={32} />,
        tags: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
        delay: 0
    },
    {
        title: "Backend",
        icon: <Server size={32} />,
        tags: ["Node.js", "Supabase", "PostgreSQL", "Firebase", "REST APIs"],
        delay: 0.2
    },
    {
        title: "Mobile & Tools",
        icon: <Smartphone size={32} />,
        tags: ["React Native", "Expo", "Figma", "Git", "Shopify"],
        delay: 0.4
    },
];

export default function Skills() {
    return (
        <section className="py-20 px-6 max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
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
        </section>
    );
}
