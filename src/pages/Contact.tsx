import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

export const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Left Column - Info */}
            <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen relative overflow-hidden flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
                {/* Soft background accents */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div
                        className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25"
                        style={{ backgroundColor: '#E5F4EC' }}
                    />
                    <div
                        className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
                        style={{ backgroundColor: '#FFFBE3' }}
                    />
                </div>

                <div className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8">
                            <span style={{ color: 'var(--text-primary)' }}>GET IN </span>
                            <br />
                            <span style={{ color: '#5FC883' }}>TOUCH</span>
                        </h1>

                        <h2
                            className="text-xl md:text-2xl mb-6 font-medium"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            We'd like to hear from you!
                        </h2>
                        <p
                            className="text-base leading-relaxed max-w-md mb-12"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            If you have any inquiries or just want to say hi, please use the contact form!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <Mail size={24} style={{ color: '#5FC883' }} />
                                <a
                                    href="mailto:hello@thedigitaldose.com"
                                    className="text-lg underline hover:no-underline transition-all"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    hello@thedigitaldose.com
                                </a>
                            </div>

                            <div className="flex items-center gap-4 pt-4">
                                <span className="text-xl">👍</span>
                                <div className="flex items-center gap-3">
                                    {[
                                        { Icon: Instagram, href: "#" },
                                        { Icon: Facebook, href: "#" },
                                        { Icon: Youtube, href: "#" },
                                        { Icon: Linkedin, href: "#" },
                                    ].map(({ Icon, href }, index) => (
                                        <a
                                            key={index}
                                            href={href}
                                            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                                            style={{
                                                backgroundColor: '#5FC883',
                                                color: '#000000'
                                            }}
                                        >
                                            <Icon size={18} />
                                        </a>
                                    ))}
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-sm font-bold"
                                        style={{
                                            backgroundColor: '#5FC883',
                                            color: '#000000'
                                        }}
                                    >
                                        V
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Right Column - Form */}
            <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen bg-[#111827] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24">
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full max-w-lg mx-auto lg:mx-0"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-sm mb-2 text-gray-400">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5FC883] transition-all bg-[#1F2937] border-transparent text-white placeholder-gray-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm mb-2 text-gray-400">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5FC883] transition-all bg-[#1F2937] border-transparent text-white placeholder-gray-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm mb-2 text-gray-400">
                                Email <span className="text-[#5FC883]">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5FC883] transition-all bg-[#1F2937] border-transparent text-white placeholder-gray-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm mb-2 text-gray-400">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5FC883] transition-all bg-[#1F2937] border-transparent text-white placeholder-gray-500 resize-none"
                            />
                        </div>

                        <div className="flex justify-start">
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02, boxShadow: '0 0 30px -5px rgba(95, 200, 131, 0.5)' }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-8 py-4 font-bold rounded-lg transition-all bg-[#5FC883] text-black hover:bg-[#4CAF70] uppercase tracking-wide"
                            >
                                Send Message
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};
