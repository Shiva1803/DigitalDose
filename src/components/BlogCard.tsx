import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface BlogCardProps {
    title: string;
    date: string;
    level: string;
    delay?: number;
}

export const BlogCard = ({ title, date, level, delay = 0 }: BlogCardProps) => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="group relative rounded-3xl p-8 h-full min-h-[400px] flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-xl"
            style={{
                backgroundColor: '#ffffff',
                border: '1px solid rgba(148, 163, 184, 0.25)',
            }}
        >
            {/* Subtle hover tint */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: 'rgba(255, 239, 194, 0.4)' }}
            />

            <div>


                {/* Title */}
                <h3
                    className="text-2xl md:text-3xl font-bold mb-4 transition-colors duration-300 leading-tight"
                    style={{ color: 'var(--text-primary)' }}
                >
                    {title}
                </h3>

                {/* Meta */}
                <div
                    className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide"
                    style={{ color: 'var(--text-muted)' }}
                >
                    <span>{date}</span>
                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: '#F7EA00' }} />
                    <span style={{ color: '#5FC883' }}>{level}</span>
                </div>
            </div>



            {/* Hover Arrow */}
            <div
                className="absolute top-8 right-8 transition-colors duration-300 text-gray-400 group-hover:text-[#5FC883]"
            >
                <ArrowUpRight className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
        </motion.div>
    );
};
