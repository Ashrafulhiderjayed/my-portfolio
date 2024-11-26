import HeadingTitle from "../../HeadingTitle/HeadingTitle";
import quicfix from "../../../assets/quicfix.jpeg";
import idlOnline from "../../../assets/idlOnline.png";
import hrm from "../../../assets/hrm.png";
import photography from "../../../assets/summer-camp.png";
import toy from "../../../assets/toy.png";
import chef from "../../../assets/kitchen.png";
import './Projects.css';
import { FaGithub, FaLink } from "react-icons/fa";
import { FaReact, FaVuejs } from "react-icons/fa6";

const Projects = () => {
    const projects = [
        {
            image: quicfix,
            name: "QuickFix Motors",
            client: "https://github.com/Ashrafulhiderjayed/QuickFix-client",
            server: "https://github.com/Ashrafulhiderjayed/QuickFix-server",
            live: "https://quickfix-703c3.web.app/",
            feature: "Online Learning Management System based on USA students from 1st to 9th Grade Math, Science, Hifz etc.",
            technology: "React.js",
        },
        {
            image: idlOnline,
            name: "IDL Online Academy",
            client: "",
            server: "",
            live: "https://online-academy.islamicdigitallane.com/",
            feature: "Online Learning Management System based on USA students from 1st to 9th Grade Math, Science, Hifz etc.",
            technology: "Vue.js",
        },
        {
            image: hrm,
            name: "HRM System",
            client: "",
            server: "",
            live: "https://hrm.islamicdigitallane.com/login",
            feature:
                "HRM system for Hi-Teach Bangla employees including maintaining projects to leave management",
            technology: "Vue.js",
        },
        {
            image: photography,
            name: "Photo Camp",
            client: "https://github.com/Ashrafulhiderjayed/summer-photo-cam-client",
            server: "https://github.com/Ashrafulhiderjayed/summer-photo-camp-server",
            live: "https://summer-photo-camp.web.app/",
            feature:
                "Implemented MERN stack, React admin dashboard, and Firebase authentication.",
            technology: "React.js",
        },
        {
            image: toy,
            name: "Wheels",
            client: "https://github.com/Ashrafulhiderjayed/toy-car-client",
            server: "https://github.com/Ashrafulhiderjayed/toy-car-server",
            live: "https://toy-car-7abae.web.app/",
            feature:
                "MERN-based CRUD operations, Firebase Authentication, and private routes.",
            technology: "React.js",
        },
        {
            image: chef,
            name: "The Kitchen",
            client: "https://github.com/Ashrafulhiderjayed/chef-client",
            server: "https://github.com/Ashrafulhiderjayed/chef-server",
            live: "https://the-kitchen-15a59.web.app/",
            feature:
                "Implemented Firebase Authentication and private route for food recipes.",
            technology: "React.js",
        },
    ];

    return (
        <section id="projects" className="pb-12 pt-8 mt-32 bg-gray-900 text-white">
            <HeadingTitle text="RECENT PROJECTS" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative bg-gray-800 rounded-lg shadow-md overflow-hidden transition hover:shadow-xl"
                    >
                        {/* Hover Scrolling Effect on Image */}
                        <figure className="fullimgrelative overflow-hidden h-56">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="fullimg w-full h-full object-cover hover:scale-105 transition duration-500 ease-in-out"
                            />
                        </figure>

                        <div className="p-6">
                            <div className="flex justify-between">
                                <h3 className="text-lg font-bold mb-2">{project.name}</h3>
                                <p>
                                    {
                                        project?.technology == 'React.js' ? <FaReact className="text-cyan-300 animate-spin text-xl" /> : <FaVuejs className="text-emerald-300 text-xl" />

                                    }
                                </p>
                                {/* <p className="font-semibold text-[#FAB12F]">{project?.technology}</p> */}
                            </div>
                            <p className="text-sm mb-4">
                                {project.feature}</p>
                            <div className="flex gap-3">
                                {project.client && (
                                    <a
                                        href={project.client}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-primary hover:text-green-400 transition"
                                    >
                                        <FaGithub /> Client
                                    </a>
                                )}
                                {project.server && (
                                    <a
                                        href={project.server}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-primary hover:text-yellow-400 transition"
                                    >
                                        <FaGithub /> Server
                                    </a>
                                )}
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-primary hover:text-blue-400 transition"
                                >
                                    <FaLink /> Website
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
