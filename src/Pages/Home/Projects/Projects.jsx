import HeadingTitle from "../../HeadingTitle/HeadingTitle";
import hrm from "../../../assets/hrm.png"
import photography from '../../../assets/summer-camp.png';
import toy from '../../../assets/toy.png';
import chef from '../../../assets/kitchen.png';
import './Projects.css';
import { FaGithub, FaLink } from "react-icons/fa";


const Projects = () => {
    const projects = [
        {
            image: hrm,
            name: 'hrm',
            client: '',
            server: '',
            live: 'https://online-academy.islamicdigitallane.com/',
            feature: 'Online Learning Management System',
        },
        {
            image: hrm,
            name: 'hrm',
            client: '',
            server: '',
            live: 'https://hrm.islamicdigitallane.com/login',
            feature: 'HRM system for Hi-Teach Bangla employees including maintaining projects to leave management',
        },
        {
            image: photography,
            name: 'Photo Camp',
            client: 'https://github.com/Ashrafulhiderjayed/summer-photo-cam-client',
            server: 'https://github.com/Ashrafulhiderjayed/summer-photo-camp-server',
            live: 'https://summer-photo-camp.web.app/',
            feature: 'Here I implemented React+Admin Dashboard system based on MERN crud operation and firebase authentication',
        },
        {
            image: toy,
            name: 'Wheels',
            client: 'https://github.com/Ashrafulhiderjayed/toy-car-client',
            server: 'https://github.com/Ashrafulhiderjayed/toy-car-server',
            live: 'https://toy-car-7abae.web.app/',
            feature: 'This is MERN based CRUD operation including Firebase Authentication and private route',
        },
        {
            image: chef,
            name: 'The Kitchen',
            client: 'https://github.com/Ashrafulhiderjayed/chef-client',
            server: 'https://github.com/Ashrafulhiderjayed/chef-server',
            live: 'https://the-kitchen-15a59.web.app/',
            feature: 'Here I implemented firebase authentication system including private route'
        },
    ]
    return (
        <>
            <HeadingTitle text="RECENT PROJECTS" />

            <div className="grid md:grid-cols-3 gap-8 text-slate-300" id="skills">
                {
                    projects.map((project, index) => <div key={index} className="shadow-lg ">

                        <figure><img className="fullimg h-72 xl:h-80 w-96" src={project.image} alt="project-image" /></figure>

                        <div className="card glass text-justify">
                            <div className="card-body">
                                <h2 className="card-title text-slate-200">Features</h2>
                                <p>{project.feature}</p>
                                <div className="card-actions justify-between">
                                    <button className="btn btn-primary flex-col justify-center"><FaGithub /><a href={project.client}><h4>Client</h4></a></button>
                                    <button className="btn btn-primary flex-col justify-center"><FaGithub /><a href={project.server}><h4>Server</h4></a></button>
                                    <button className="btn btn-primary flex-col justify-center"><FaLink /><a href={project.live}><h4>Website</h4></a></button>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </>
    );
};

export default Projects;