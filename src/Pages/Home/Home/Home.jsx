import About from "../About/About";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import GithubContribution from "../GithubContribution/GithubContribution";
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
            <GithubContribution />
            <Contact />
        </div>
    );
};

export default Home;