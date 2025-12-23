import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { services } from '../data/services';
import { useEffect } from 'react';

export const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const service = services.find(s => s.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white text-black">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
                    <button
                        onClick={() => navigate('/services')}
                        className="text-[#5FC883] hover:underline"
                    >
                        Back to Services
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <div className="container-custom pt-32 pb-20">
                <button
                    onClick={() => navigate('/services')}
                    className="flex items-center gap-2 text-gray-500 hover:text-[#5FC883] mb-12 transition-colors group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Services
                </button>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#111827]">
                        {service.heading.split(' ').map((word, i, arr) => (
                            <span key={i} style={{ color: ['Strategy', 'Agency', 'Identities', 'Solutions', 'Optimization', 'Production'].includes(word.replace(/[^a-zA-Z]/g, '')) ? '#5FC883' : 'inherit' }}>
                                {word} {i < arr.length - 1 ? ' ' : ''}
                            </span>
                        ))}
                    </h1>

                    <p className="text-[#5FC883] font-medium mb-12 text-xl">
                        Have a look at our most innovative strategies here!
                    </p>

                    <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
                        <div className="w-full lg:w-1/2">
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                {service.description}
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full max-w-lg object-contain hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    <div className="w-full border-t border-gray-100 pt-12">
                        <p className="text-gray-500 leading-relaxed text-lg max-w-4xl">
                            {service.longText}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
