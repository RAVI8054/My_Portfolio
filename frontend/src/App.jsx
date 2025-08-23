import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import ProjectsSection from './components/ProjectSection';
import Skills from './components/Skills';

function App() {
    return (
        <>
            <Header />
            <main className="bg-white text-black dark:bg-[#09090B] dark:text-white transition-colors duration-300">
                {/* Common wrapper to ensure alignment across sections */}
                <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-20">
                    <About />
                    <Skills />
                    <ProjectsSection />
                    <Contact/>
                    <Footer/>
                </div>
            </main>
        </>
    );
}

export default App;
