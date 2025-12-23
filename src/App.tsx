import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Blogs } from './pages/Blogs';
import { About } from './pages/About';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';
import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';

import { SmoothScroll } from './components/SmoothScroll';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <SmoothScroll>
          <div className="min-h-screen font-sans bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-primary selection:text-black">
            <ScrollToTop />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </div>
        </SmoothScroll>
      </Router>
    </ThemeProvider>
  );
}

export default App;
