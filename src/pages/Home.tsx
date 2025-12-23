import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Work } from '../components/Work';
import { PortfolioCTA } from '../components/PortfolioCTA';

export const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Work />
            <PortfolioCTA />
        </>
    );
};
