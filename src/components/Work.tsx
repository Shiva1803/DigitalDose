import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlogCard } from './BlogCard';

const featuredBlogs = [
    {
        title: 'Google Antigravity, Simplified',
        date: 'Nov 27, 2025',
        link: 'https://medium.com/@thedigitaldose25/google-antigravity-simplified-7ca18fc33dbb',
        image: '/google-antigravity.png',
        delay: 0.1
    },
    {
        title: 'WEB 3 - The Web doesn’t need a CEO.',
        date: 'Nov 29, 2025',
        link: 'https://medium.com/@thedigitaldose25/web-3-the-web-doesnt-need-a-ceo-7ed5d33eb519',
        image: '/web3-bg.png',
        delay: 0.2
    },
    {
        title: 'Satsuma: Making Web3 Data Feel Like Web2',
        date: 'Dec 10, 2025',
        link: 'https://medium.com/@thedigitaldose25/satsuma-making-web3-data-feel-like-web2-a17515cc7c66',
        image: '/satsuma-new.png',
        delay: 0.3
    },
    {
        title: 'Scale AI-Human in the Loop',
        date: 'Dec 12, 2025',
        link: 'https://medium.com/@thedigitaldose25/scale-ai-human-in-the-loop-4061d2447d22',
        image: '/scale-ai.png',
        delay: 0.1
    }
];

export const Work = () => {

    return (
        <section
            id="work"
            className="py-32"
            style={{
                backgroundColor: '#111827',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}
        >
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>

                        <h2
                            className="text-7xl md:text-8xl font-bold leading-[0.9] tracking-tighter"
                            style={{ color: '#ffffff' }}
                        >
                            Featured <span className="relative inline-block" style={{ color: '#5FC883' }}>
                                Blogs
                                <span className="absolute -bottom-5 left-0 w-full h-2" style={{ backgroundColor: '#F7EA00' }}></span>
                            </span>
                        </h2>
                    </div>
                    <Link
                        to="/blogs"
                        className="hidden md:flex items-center gap-2 font-bold transition-colors group hover:text-white"
                        style={{ color: '#F7EA00' }}
                    >
                        View all Blogs <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {featuredBlogs.map((blog, index) => (
                        <BlogCard
                            key={index}
                            {...blog}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link
                        to="/blogs"
                        className="inline-flex items-center gap-2 font-medium transition-colors hover:text-white"
                        style={{ color: '#F7EA00' }}
                    >
                        View all Blogs <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};
