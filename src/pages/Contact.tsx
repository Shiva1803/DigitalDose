import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin, Twitter } from 'lucide-react';

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
                                        { Icon: Instagram, href: "https://www.instagram.com/_thedigitaldose_/" },
                                        { Icon: Linkedin, href: "https://www.linkedin.com/company/109764857/" },
                                        { Icon: Twitter, href: "https://x.com/_thedigitaldose" },
                                        {
                                            // Custom SVG for Medium since Lucide might not have it, or use a specific one
                                            Icon: ({ size, ...props }: { size?: number | string } & React.SVGProps<SVGSVGElement>) => (
                                                <svg
                                                    width={size}
                                                    height={size}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    {...props}
                                                >
                                                    <path d="M8 16a3 3 0 1 1-6 0v-1a10 10 0 1 0 10 10" />
                                                    <circle cx="12" cy="12" r="10" />
                                                    {/* Actually let's use a proper Medium icon path approximation or just a generic one if simplified */}
                                                    {/* Medium logo is basically three ellipsis-like shapes or a serif M. 
                                                        Let's use a standard "M" or "Book" if we want to be safe, BUT the user wants the LOGO.
                                                        Let's use a path that looks like the Medium 'M' or the 3-dot logo? 
                                                        Actually current Medium logo is the ellipsis. 
                                                        Old one was 'M'. 
                                                        Let's try to simulate the 3-dots or just use text 'Medium'? 
                                                        No, user asked for logos.
                                                        Let's use a simple path for the 'M' or just generic 'FileText' if unsure?
                                                        Better: standard Medium icon SVG path.
                                                    */}
                                                    <circle cx="5" cy="12" r="5" fill="currentColor" stroke="none" />
                                                    <ellipse cx="14" cy="12" rx="3.5" ry="5" fill="currentColor" stroke="none" />
                                                    <ellipse cx="21" cy="12" rx="1.5" ry="5" fill="currentColor" stroke="none" />
                                                </svg>
                                            ),
                                            href: "https://medium.com/@thedigitaldose25"
                                        },
                                    ].map(({ Icon, href }, index) => (
                                        <a
                                            key={index}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                                            style={{
                                                backgroundColor: '#5FC883', // Keep base green
                                                color: '#000000'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F7EA00'}
                                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5FC883'}
                                        >
                                            <Icon size={18} />
                                        </a>
                                    ))}
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
                                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7EA00] transition-all bg-[#1F2937] border-transparent text-white placeholder-gray-500"
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
                                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7EA00] transition-all bg-[#1F2937] border-transparent text-white placeholder-gray-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm mb-2 text-gray-400">
                                Email <span className="text-[#F7EA00]">*</span>
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
                                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7EA00] transition-all bg-[#1F2937] border-transparent text-white placeholder-gray-500 resize-none"
                            />
                        </div>

                        <div className="flex justify-start">
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02, boxShadow: '0 0 30px -5px rgba(247, 234, 0, 0.5)' }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-8 py-4 font-bold rounded-lg transition-all bg-[#F7EA00] text-black hover:bg-[#E5D900] uppercase tracking-wide"
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
