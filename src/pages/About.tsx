import { motion } from 'framer-motion';
import { Trophy, Users, Globe, Rocket, ArrowRight, User } from 'lucide-react';

const coreValues = [
    { label: 'Fresh Perspective', value: '🎯', desc: 'New ideas, no legacy baggage', icon: Rocket },
    { label: 'Personal Touch', value: '🤝', desc: 'Direct founder involvement', icon: Users },
    { label: 'Modern Stack', value: '⚡', desc: 'Latest tech, best practices', icon: Globe },
    { label: 'Hungry to Prove', value: '🔥', desc: 'We go the extra mile', icon: Trophy },
];

const leaders = [
    {
        name: 'Sarah Mitchell',
        role: 'Co-Founder & CEO',
        desc: 'Spearheading digital transformation for global brands. Formerly at TechGiant & CreativeInc.',
        image: null
    },
    {
        name: 'David Chen',
        role: 'Co-Founder & MD',
        desc: 'A strategist at heart. Driving growth and client success stories through data-driven creativity.',
        image: null
    },
    {
        name: 'Elena Rodriguez',
        role: 'Head of Creative',
        desc: 'Award-winning designer with a passion for crafting immersive digital experiences that convert.',
        image: null
    }
];

export const About = () => {

    return (
        <div
            className="pt-32 min-h-screen overflow-hidden"
            style={{ backgroundColor: '#FFFDF4' }}
        >
            {/* Hero Section */}
            <div className="container-custom relative z-10 mb-24">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 inline-block"
                    style={{ color: '#9CA3AF' }}
                >
                    About The Digital Dose
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
                    style={{ color: 'var(--text-primary)' }}
                >
                    We live and breathe digital.
                </motion.h1>
                <div className="w-20 h-1 rounded-full mb-6" style={{ backgroundColor: '#5FC883' }}></div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg max-w-2xl leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                >
                    We are a full‑service creative digital agency helping brands turn everyday touchpoints
                    into super‑rich online experiences. From strategy and social to web, performance and data,
                    we stitch everything together under one roof.
                </motion.p>
            </div>

            {/* What We Do Section */}
            <section
                className="py-20 relative"
                style={{
                    backgroundColor: '#F5F7FB',
                    borderTop: '1px solid rgba(15, 23, 42, 0.06)',
                    borderBottom: '1px solid rgba(15, 23, 42, 0.06)'
                }}
            >
                <div className="container-custom grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2
                            className="text-4xl font-bold mb-8"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            What We Do?
                        </h2>
                        <p
                            className="leading-relaxed mb-6"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            We work with clients across geographies and verticals—technology, ecommerce, education,
                            healthcare and more. Our team thrives at the intersection of sharp strategy, thoughtful design,
                            and performance marketing.
                        </p>
                        <p
                            className="leading-relaxed mb-8"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            We don't just follow trends; we design systems that outlast them. Every campaign, landing page,
                            content piece and ad is built to ladder up to business outcomes, not vanity metrics.
                        </p>
                        <ul className="space-y-2 mb-8 text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>
                            <li>• Digital strategy & brand positioning</li>
                            <li>• Social media & content marketing</li>
                            <li>• Website & landing page design / development</li>
                            <li>• SEO, performance marketing & analytics</li>
                        </ul>
                        <button
                            className="flex items-center gap-2 font-bold hover:gap-4 transition-all"
                            style={{ color: '#5FC883' }}
                        >
                            View Our Work <ArrowRight className="w-5 h-5" />
                        </button>
                    </motion.div>

                    {/* Abstract Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] w-full rounded-3xl overflow-hidden p-8 flex items-center justify-center group"
                        style={{
                            backgroundColor: '#ffffff',
                            border: '1px solid rgba(148, 163, 184, 0.3)'
                        }}
                    >
                        <div
                            className="absolute inset-0 opacity-50"
                            style={{ background: 'linear-gradient(to bottom right, rgba(95, 200, 131, 0.15), rgba(247, 234, 0, 0.08))' }}
                        />
                        <div className="relative z-10 grid grid-cols-2 gap-4 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                            <div
                                className="w-32 h-32 rounded-2xl backdrop-blur-md"
                                style={{
                                    backgroundColor: 'rgba(229, 244, 236, 0.8)',
                                    border: '1px solid rgba(95, 200, 131, 0.5)'
                                }}
                            />
                            <div
                                className="w-32 h-32 rounded-2xl backdrop-blur-md translate-y-8"
                                style={{
                                    backgroundColor: 'rgba(95, 200, 131, 0.4)',
                                    border: '1px solid #5FC883'
                                }}
                            />
                            <div
                                className="w-32 h-32 rounded-2xl backdrop-blur-md -translate-y-8"
                                style={{
                                    backgroundColor: 'rgba(247, 234, 0, 0.3)',
                                    border: '1px solid #F7EA00'
                                }}
                            />
                            <div
                                className="w-32 h-32 rounded-2xl backdrop-blur-md"
                                style={{
                                    backgroundColor: 'rgba(229, 244, 236, 0.8)',
                                    border: '1px solid rgba(95, 200, 131, 0.5)'
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Values Strip */}
            <section className="py-16 container-custom">
                <h3
                    className="text-2xl font-bold mb-10 text-center"
                    style={{ color: 'var(--text-primary)' }}
                >
                    Why brands choose The Digital Dose
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {coreValues.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center p-6 rounded-2xl transition-colors"
                            style={{
                                backgroundColor: '#ffffff',
                                border: '1px solid rgba(148, 163, 184, 0.3)'
                            }}
                        >
                            <item.icon
                                className="w-8 h-8 mx-auto mb-4"
                                style={{ color: '#5FC883' }}
                            />
                            <div className="text-3xl mb-2">{item.value}</div>
                            <div
                                className="text-lg font-semibold mb-2"
                                style={{ color: 'var(--text-primary)' }}
                            >
                                {item.label}
                            </div>
                            <div
                                className="text-sm"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                {item.desc}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Awards & Highlights - inspired by #WeBeeWinning */}
            <section
                className="py-20"
                style={{ backgroundColor: '#F5F7FB', borderTop: '1px solid rgba(15, 23, 42, 0.06)' }}
            >
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10">
                        <div>
                            <h2
                                className="text-3xl md:text-4xl font-bold mb-3"
                                style={{ color: 'var(--text-primary)' }}
                            >
                                Awards & Highlights
                            </h2>
                            <p className="max-w-xl text-base md:text-lg" style={{ color: 'var(--text-secondary)' }}>
                                From scrappy experiments to full‑scale launches, we’ve helped brands ship campaigns
                                that win both attention and ROI.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-3xl p-6 border border-slate-200">
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] mb-2" style={{ color: '#9CA3AF' }}>
                                Campaign Impact
                            </p>
                            <p className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                                10x ROAS for performance‑first ecommerce brands
                            </p>
                            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                Full‑funnel campaigns stitched across Meta, Google and landing page optimisations.
                            </p>
                        </div>
                        <div className="bg-white rounded-3xl p-6 border border-slate-200">
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] mb-2" style={{ color: '#9CA3AF' }}>
                                Product Launches
                            </p>
                            <p className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                                Category‑defining launches for SaaS and consumer brands
                            </p>
                            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                From naming and brand systems to launch films, landing pages and growth loops.
                            </p>
                        </div>
                        <div className="bg-white rounded-3xl p-6 border border-slate-200">
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] mb-2" style={{ color: '#9CA3AF' }}>
                                Long‑term Partners
                            </p>
                            <p className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                                Multi‑year retainers with ambitious teams
                            </p>
                            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                We plug into in‑house teams as an extension—strategy, creative, performance and product.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-20 relative">
                <div className="container-custom">
                    <h2
                        className="text-4xl font-bold mb-16 text-center"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        The Leadership
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {leaders.map((leader, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div
                                className="h-[400px] w-full rounded-3xl overflow-hidden relative mb-6"
                                style={{
                                    backgroundColor: '#ffffff',
                                    border: '1px solid rgba(148, 163, 184, 0.3)'
                                }}
                                >
                                    <div
                                        className="absolute inset-0 flex items-center justify-center z-10"
                                        style={{
                                            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)'
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

                                    <User
                                        className="w-32 h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-all duration-500"
                                        strokeWidth={1}
                                        style={{ color: 'var(--text-muted)' }}
                                    />

                                    <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="font-bold mb-1" style={{ color: '#F7EA00' }}>{leader.role}</p>
                                        <h3 className="text-2xl font-bold text-white">{leader.name}</h3>
                                    </div>
                                </div>
                                <p
                                    className="leading-relaxed px-2 pl-4 transition-colors"
                                    style={{
                                        color: 'var(--text-secondary)',
                                        borderLeft: '2px solid #5FC883'
                                    }}
                                >
                                    {leader.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Presence & Contact strip – echoing offices / connect sections */}
            <section className="py-16 container-custom">
                <div className="grid md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-10">
                    <div>
                        <h3
                            className="text-2xl font-bold mb-4"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            Where we collaborate from
                        </h3>
                        <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                            We’re a remote‑first team with roots in India and collaborators across time‑zones,
                            making it easy to stay close to your customers—wherever they are.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-4 text-sm">
                            <div className="rounded-2xl border border-slate-200 bg-white p-4">
                                <p className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>New Delhi</p>
                                <p style={{ color: 'var(--text-secondary)' }}>Primary studio & strategy hub.</p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-4">
                                <p className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Dubai</p>
                                <p style={{ color: 'var(--text-secondary)' }}>Access to MENA brands & partners.</p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-4">
                                <p className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Toronto</p>
                                <p style={{ color: 'var(--text-secondary)' }}>On‑ground collaboration for North America.</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 flex flex-col justify-between">
                        <div>
                            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: '#9CA3AF' }}>
                                Connect with us
                            </p>
                            <p className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                                Ready to create your next super‑rich experience?
                            </p>
                            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                                Share a brief, a deck or even a rough idea—we’ll get back with thoughts, questions
                                and possible directions.
                            </p>
                        </div>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center mt-4 px-6 py-3 rounded-full text-sm font-semibold"
                            style={{ backgroundColor: '#5FC883', color: '#000000' }}
                        >
                            Get in touch
                        </a>
                    </div>
                </div>
            </section>

            {/* Motto Section */}
            <div
                className="py-12"
                style={{ backgroundColor: '#F7EA00' }}
            >
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-black">
                            We live by our motto – <br className="hidden md:block" />
                            "We create super-rich experiences online!"
                        </h2>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
