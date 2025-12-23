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
        <div
            className="min-h-screen pt-24 pb-16 relative overflow-hidden"
            style={{ backgroundColor: 'var(--bg-primary)' }}
        >
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

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Main Heading */}
                    <h1
                        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-16"
                    >
                        <span style={{ color: 'var(--text-primary)' }}>GET IN </span>
                        <span style={{ color: '#5FC883' }}>TOUCH</span>
                    </h1>

                    {/* Two Column Layout */}
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                        {/* Left Column - Info */}
                        <div className="space-y-8">
                            <div>
                                <h2
                                    className="text-xl md:text-2xl mb-6 font-medium"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    We'd like to hear from you!
                                </h2>
                                <p
                                    className="text-base leading-relaxed"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    If you have any inquiries or just want to say hi, please use the contact form!
                                </p>
                            </div>

                            {/* Contact Info */}
                            <div className="pt-16 space-y-4">
                                {/* Email */}
                                <div className="flex items-center gap-4">
                                    <Mail size={20} style={{ color: '#5FC883' }} />
                                    <a
                                        href="mailto:hello@thedigitaldose.com"
                                        className="underline hover:no-underline transition-all"
                                        style={{ color: 'var(--text-primary)' }}
                                    >
                                        hello@thedigitaldose.com
                                    </a>
                                </div>

                                {/* Social Icons */}
                                <div className="flex items-center gap-4 pt-2">
                                    <span style={{ color: 'var(--text-muted)' }}>👍</span>
                                    <div className="flex items-center gap-3">
                                        <a
                                        href="#"
                                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                                        style={{
                                            backgroundColor: '#5FC883',
                                            color: '#000000'
                                        }}
                                        >
                                            <Instagram size={16} />
                                        </a>
                                        <a
                                        href="#"
                                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                                        style={{
                                            backgroundColor: '#5FC883',
                                            color: '#000000'
                                        }}
                                        >
                                            <Facebook size={16} />
                                        </a>
                                        <a
                                        href="#"
                                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                                        style={{
                                            backgroundColor: '#5FC883',
                                            color: '#000000'
                                        }}
                                        >
                                            <Youtube size={16} />
                                        </a>
                                        <a
                                        href="#"
                                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                                        style={{
                                            backgroundColor: '#5FC883',
                                            color: '#000000'
                                        }}
                                        >
                                            V
                                        </a>
                                        <a
                                        href="#"
                                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                                        style={{
                                            backgroundColor: '#5FC883',
                                            color: '#000000'
                                        }}
                                        >
                                            <Linkedin size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* First Name & Last Name Row */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label
                                            htmlFor="firstName"
                                            className="block text-sm mb-2"
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                                            style={{
                                                borderColor: 'var(--border-color)',
                                                backgroundColor: '#ffffff',
                                                color: 'var(--text-primary)'
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="lastName"
                                            className="block text-sm mb-2"
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                                            style={{
                                                borderColor: 'var(--border-color)',
                                                backgroundColor: '#ffffff',
                                                color: 'var(--text-primary)'
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm mb-2"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        Email <span style={{ color: '#22D3EE' }}>*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                                        style={{
                                            borderColor: 'var(--border-color)',
                                            backgroundColor: '#ffffff',
                                            color: 'var(--text-primary)'
                                        }}
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm mb-2"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none"
                                        style={{
                                            borderColor: 'var(--border-color)',
                                            backgroundColor: '#ffffff',
                                            color: 'var(--text-primary)'
                                        }}
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-end">
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02, boxShadow: '0 0 30px -5px rgba(109,40,217,0.5)' }}
                                        whileTap={{ scale: 0.98 }}
                                        className="px-8 py-3 font-medium rounded-full transition-all bg-[#5FC883] text-black hover:bg-[#4CAF70]"
                                    >
                                        Send Message
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
