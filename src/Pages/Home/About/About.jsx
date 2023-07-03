import { Tilt } from 'react-tilt';
import img from '../../../assets/1.png'
import HeadingTitle from '../../HeadingTitle/HeadingTitle';

const About = () => {
    const defaultOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            35,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          1000,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
    return (
        <div className="my-16">
            <HeadingTitle text="ABOUT ME"/>
            <section className="flex justify-between align-middle flex-col md:flex-row">
            <div className="flex md:w-1/2 sm:text-center">
            <Tilt options={defaultOptions} style={{ }}>
          <img className='w-3/4 object-cover' src={img} alt="" />
          </Tilt>
        </div>
        <div className="flex md:w-1/2 items-center text-justify">
                {/* <div className='flex-1'>
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className='flex-1  items-center text-justify'> */}
                <div className='text-slate-300 px-4 md:px-0'>
                <h1 className='text-xl'>Hi there! <br /></h1>
                    <p>I'm frontend-focused full stack web developer with expertise in MERN stack technology. With a passion for creating intuitive and engaging user experiences, I thrive in turning complex ideas into beautiful and functional websites.
                    <br />
                    <br />
                    As a frontend specialist, I possess a deep understanding of HTML, CSS, and JavaScript, and I'm well-versed in modern frameworks like React.js. I used firebase to authenticate websites I build. I love crafting responsive and mobile-friendly interfaces that provide seamless navigation and deliver exceptional user interactions.
                    <br />
                    <br />
                    In addition to my frontend skills, I have a solid foundation in backend development using Node.js and Express.js. I am experienced in building RESTful APIs and integrating them with MongoDB for efficient data management. Working with MERN stack allows me to seamlessly handle both client-side and server-side development, ensuring a smooth end-to-end user experience.
                    <br />
                    <br />
                    I am ready build amazing websites for you.</p>
                </div>
                </div>
            </section>
        </div>
    );
};

export default About;