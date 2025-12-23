import { motion } from 'framer-motion';
import { BlogCard } from '../components/BlogCard';
import { Search } from 'lucide-react';


const blogs = [
    {

        title: 'First Chat and Voice Interaction',
        date: 'May 15, 2025',
        level: 'Beginner',

        delay: 0.1
    },
    {

        title: 'Better Prompts Talk to AI More Effectively',
        date: 'May 15, 2025',
        level: 'Beginner',

        delay: 0.2
    },
    {

        title: 'Spoken Commands to Smart Results',
        date: 'May 15, 2025',
        level: 'Intermediate',

        delay: 0.3
    },
    {

        title: 'Advanced Neural Network Architectures',
        date: 'May 15, 2025',
        level: 'Intermediate',

        delay: 0.1
    },
    {

        title: 'Optimizing Large Language Models',
        date: 'May 15, 2025',
        level: 'Expert',

        delay: 0.2
    },
    {

        title: 'Future of Generative AI Systems',
        date: 'May 15, 2025',
        level: 'Expert',

        delay: 0.3
    }
];

export const Blogs = () => {
    return (
        <div className="pt-32 pb-20 min-h-screen relative overflow-hidden" style={{ backgroundColor: '#FFFDF4' }}>
            <div className="container-custom relative z-10">
                {/* Header Section with Parallel Decorative Element */}
                <div className="mb-20 flex flex-col lg:flex-row justify-between items-start gap-12">
                    <div className="max-w-2xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            Blogs
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="relative max-w-md"
                        >
                            <input
                                type="text"
                                placeholder="Search for any blog..."
                                className="w-full pl-6 pr-12 py-4 rounded-full bg-white border border-gray-200 focus:outline-none focus:border-[#5FC883] shadow-sm text-lg transition-colors"
                                style={{ color: 'var(--text-primary)' }}
                            />
                            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                        </motion.div>
                    </div>

                    {/* Decorative Grid */}
                    <div className="hidden lg:block opacity-100 pointer-events-none mt-4">
                        <div className="grid grid-cols-4 gap-4">
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="w-12 h-12 rounded-lg"
                                    style={{
                                        background: i % 2 === 0
                                            ? '#5FC883'
                                            : i % 3 === 0
                                                ? '#F7EA00'
                                                : '#E5F4EC'
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <BlogCard
                            key={index}
                            {...blog}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
