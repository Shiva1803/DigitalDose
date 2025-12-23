import Lenis from 'lenis';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

interface SmoothScrollProps {
    children: React.ReactNode;
}

export const SmoothScroll = ({ children }: SmoothScrollProps) => {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });
        lenisRef.current = lenis;

        // Sync GSAP integration
        // lenis.on('scroll', gsap.updateRoot); // Optional: usually for ScrollTrigger

        // Add Lenis's raf method to GSAP's ticker
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        // Disable GSAP lag smoothing to ensure smooth scroll
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove((time) => lenis.raf(time * 1000));
        };
    }, []);

    return <>{children}</>;
};
