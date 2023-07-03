import About from "../About/About";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div className="">
            <Navbar />
            <Header />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;