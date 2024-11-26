import { Tilt } from 'react-tilt';
import img from '../../../assets/1.png';
import HeadingTitle from '../../HeadingTitle/HeadingTitle';

const About = () => {
    const defaultOptions = {
        reverse: false,
        max: 35,
        perspective: 1000,
        scale: 1.1,
        speed: 1000,
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
    };

    return (
        <div className="my-16" id="about">
            <HeadingTitle text="ABOUT ME" />
            <section className="flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center">
                    <Tilt options={defaultOptions}>
                        <img
                            className="w-3/4 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            src={img}
                            alt="Developer Illustration"
                        />
                    </Tilt>
                </div>

                {/* Text Section */}
                <div className="md:w-1/2 text-justify">
                    <div className="text-gray-300 px-6 md:px-0">
                        <h1 className="text-3xl font-semibold text-red-600 mb-4">
                            Hi there! 👋
                        </h1>
                        <p className="mb-6 leading-relaxed">
                            I am a <span className="font-semibold text-red-500">frontend-focused full-stack developer</span> with expertise in the MERN stack. My technical skill set includes <span className="font-semibold">HTML</span>, <span className="font-semibold">CSS</span>, <span className="font-semibold">JavaScript</span>, and advanced frameworks like <span className="font-semibold text-red-500">React.js</span>. 
                        </p>
                        <p className="mb-6 leading-relaxed">
                            I am comfortable working with tools like <span className="font-semibold">Firebase</span> for authentication, <span className="font-semibold">MongoDB</span> for database management, and <span className="font-semibold">Express.js</span> for backend development. I’ve also implemented JWT authentication, dynamic data filtering, and private routes to ensure seamless user interactions.
                        </p>
                        <p className="mb-6 leading-relaxed">
                            I use modern technologies such as <span className="font-semibold">Tailwind CSS</span> and <span className="font-semibold">DaisyUI</span> to create responsive, user-friendly interfaces, combined with tools like <span className="font-semibold">Stripe</span> for payment integration and <span className="font-semibold">Axios</span> for API requests.
                        </p>
                        <p className="leading-relaxed">
                            My strong command of <span className="font-semibold">C++</span>, <span className="font-semibold">TypeScript</span>, and <span className="font-semibold">JavaScript</span> further enables me to solve complex problems and deliver robust, scalable applications. Ready to collaborate? Let’s build something exceptional together!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
