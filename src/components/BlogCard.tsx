import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface BlogCardProps {
    title: string;
    date: string;
    delay?: number;
    link?: string;
    image?: string;
}

export const BlogCard = ({ title, date, delay = 0, link, image }: BlogCardProps) => {

    const Component = link ? motion.a : motion.div;

    return (
        <Component
            href={link}
            target={link ? "_blank" : undefined}
            rel={link ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="group relative rounded-3xl p-8 h-full min-h-[400px] flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-xl block"
            style={{
                backgroundColor: image ? 'transparent' : '#ffffff',
                backgroundImage: image ? `url(${image})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '1px solid rgba(148, 163, 184, 0.25)',
                cursor: link ? 'pointer' : 'default'
            }}
        >
            {/* Dark Overlay for Image Background */}
            {image && (
                <div
                    className="absolute inset-0 bg-black/60 z-0 transition-opacity duration-300 group-hover:bg-black/50"
                />
            )}

            {/* Subtle hover tint for non-image cards */}
            {!image && (
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ backgroundColor: 'rgba(255, 239, 194, 0.4)' }}
                />
            )}

            <div className="flex flex-col h-full relative z-10 w-full">
                <div className="flex flex-col flex-grow justify-end h-full">
                    {/* Title */}
                    <h3
                        className="text-2xl md:text-3xl font-bold mb-4 transition-colors duration-300 leading-tight"
                        style={{ color: image ? '#ffffff' : 'var(--text-primary)' }}
                    >
                        {title}
                    </h3>

                    {/* Meta */}
                    <div
                        className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide mt-4"
                        style={{ color: image ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)' }}
                    >
                        <span>{date}</span>
                    </div>
                </div>
            </div>

            {/* Hover Arrow */}
            <div
                className={`absolute top-8 right-8 transition-colors duration-300 ${image ? 'text-white' : 'text-gray-400 group-hover:text-[#5FC883]'} z-20`}
            >
                <div className={`${image ? 'bg-white/10 backdrop-blur-md' : 'bg-transparent'} rounded-full p-2`}>
                    <ArrowUpRight className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
            </div>
        </Component>
    );
};
