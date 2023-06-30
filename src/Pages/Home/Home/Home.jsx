import About from "../About/About";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";


const Home = () => {
    return (
        <div className="">
            <Navbar />
            <Header />
            <About />
            <Projects />
        </div>
    );
};

export default Home;