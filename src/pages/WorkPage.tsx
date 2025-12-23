import { motion } from 'framer-motion';

const projects = [
    {
        title: "Avara",
        category: "Fitness",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2670&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Health Core",
        category: "Healthcare",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "ShowIn",
        category: "Creative",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2500&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Tigre-Tigre",
        category: "Restaurant",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2670&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Watches",
        category: "eCommerce",
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2669&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Launchfolio",
        category: "Creative",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        link: "#"
    }
];

export const WorkPage = () => {
    return (
        <div className="min-h-screen selection:bg-black selection:text-white" style={{ backgroundColor: '#FFFDF4', color: '#000000' }}>

            {/* Hero Section */}
            <div className="pt-40 pb-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-7xl md:text-9xl font-serif italic tracking-tight mb-4"
                >
                    Our <span className="not-italic" style={{ color: '#5FC883' }}>Works</span>
                </motion.h1>
            </div>

            {/* Projects Grid */}
            <div className="container-custom px-4 pb-20">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200"
                        >
                            {/* Card Content Wrapper */}
                            <div className="aspect-[4/3] w-full overflow-hidden">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.5 }}
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                />
                            </div>

                            {/* Bottom Bar */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                                    <p className="text-[#F7EA00] text-sm font-medium tracking-wide">{project.category}</p>
                                </div>
                                <a
                                    href={project.link}
                                    className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300"
                                    style={{ backgroundColor: '#5FC883', color: '#000000' }}
                                >
                                    Visit site
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Custom Footer "Create Bold" */}
            {/* Custom Footer "Create Bold" */}
            {/* Custom Footer "Create Bold" */}
            <section className="pt-20 pb-0 relative overflow-hidden flex flex-col items-center" style={{ backgroundColor: '#FFFDF4' }}>

                <div className="relative z-10 text-center px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-bold mb-2 tracking-tighter"
                        style={{ color: '#000000' }}
                    >
                        Create Bold.
                    </motion.h2>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter"
                        style={{ color: '#5FC883' }}
                    >
                        Deliver Better.
                    </motion.h2>
                </div>

                {/* Abstract Logo Mark - In Flow Below Text */}
                <div className="relative w-full max-w-[450px] -mt-10 pointer-events-none z-0">
                    <svg width="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-100">
                        <defs>
                            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#5FC883" />
                                <stop offset="100%" stopColor="#F7EA00" />
                            </linearGradient>
                        </defs>
                        <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="url(#logoGradient)" />
                        <path d="M50 20 L80 50 L50 80 L20 50 Z" fill="#ffffff" />
                    </svg>

                    {/* Gaussian Blur Mask for Bottom - Matching Sketch */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#FFFDF4] via-[#FFFDF4]/80 to-transparent backdrop-blur-[4px]"></div>
                </div>
            </section>
        </div>
    );
};
