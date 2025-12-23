import { Facebook, Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';

export const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer
            className="pt-20 pb-10 relative z-20"
            style={{
                backgroundColor: '#000000',
                color: '#ffffff'
            }}
        >
            <div className="container-custom">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center text-black font-bold text-xl"
                                style={{ backgroundColor: '#5FC883' }}
                            >
                                D
                            </div>
                            <span className="font-bold text-xl tracking-tight" style={{ color: '#ffffff' }}>
                                The Digital Dose
                            </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            We are a team of creative minds dedicated to prescribing the best digital solutions for your brand's growth.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                                    style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: '#F9FAFB' }}
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6" style={{ color: '#ffffff' }}>Company</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-[#5FC883] transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-[#5FC883] transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-[#5FC883] transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-[#5FC883] transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6" style={{ color: '#ffffff' }}>Services</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-[#5FC883] transition-colors">SEO & Marketing</a></li>
                            <li><a href="#" className="hover:text-[#5FC883] transition-colors">Web Development</a></li>
                            <li><a href="#" className="hover:text-[#5FC883] transition-colors">Branding</a></li>
                            <li><a href="#" className="hover:text-[#5FC883] transition-colors">Content Strategy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6" style={{ color: '#ffffff' }}>Get Your Dose</h4>
                        <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest digital trends.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent border border-slate-600 rounded-l-lg px-4 py-3 w-full focus:outline-none focus:border-[#5FC883] transition-colors text-white placeholder-gray-500"
                            />
                            <button
                                className="px-4 rounded-r-lg hover:opacity-90 transition-colors text-black"
                                style={{ backgroundColor: '#5FC883' }}
                            >
                                <ArrowUp className="rotate-90" size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© 2024 The Digital Dose. All rights reserved.</p>
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-[#5FC883] transition-colors"
                    >
                        Back to Top <ArrowUp size={16} />
                    </button>
                </div>
            </div>
        </footer>
    );
};
