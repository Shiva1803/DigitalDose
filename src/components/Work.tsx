import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
    {
        title: "Neon FinTech",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "EcoLife Brand",
        category: "Branding & Identity",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Urban Coffee",
        category: "Social Media Strategy",
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "TechFlow App",
        category: "App Marketing",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

export const Work = () => {

    return (
        <section
            id="work"
            className="py-32"
            style={{
                background: 'linear-gradient(to right, rgba(95, 200, 131, 0.15), #ffffff, rgba(247, 234, 0, 0.15))',
                borderTop: '1px solid rgba(15, 23, 42, 0.06)'
            }}
        >
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <span
                            className="font-bold tracking-wider uppercase text-sm mb-2 block"
                            style={{ color: '#000000' }}
                        >
                            Selected Blogs
                        </span>
                        <h2
                            className="text-7xl md:text-8xl font-bold leading-[0.9] tracking-tighter"
                            style={{ color: '#000000' }}
                        >
                            Featured Blogs
                        </h2>
                    </div>
                    <a
                        href="#"
                        className="hidden md:flex items-center gap-2 font-bold transition-colors group hover:text-white"
                        style={{ color: '#000000' }}
                    >
                        View all Blogs <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative rounded-3xl overflow-hidden cursor-pointer bg-white border border-slate-200"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80"
                                />
                            </div>
                            <div
                                className="absolute inset-x-0 bottom-0 p-8 pt-32 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
                            >
                                <p
                                    className="text-sm font-bold uppercase tracking-wider mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100"
                                    style={{ color: '#F7EA00' }}
                                >
                                    {project.category}
                                </p>
                                <h3 className="text-white text-3xl font-bold translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    {project.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 font-medium transition-colors hover:text-[#22D3EE]"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        View all Blogs <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};
