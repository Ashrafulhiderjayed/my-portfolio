import { TypeAnimation } from 'react-type-animation';
import img from '../../../assets/cover.png'
import './Header.css';
import { Tilt } from 'react-tilt';

const Header = () => {
const handleDownload = () => {
    // const resumeUrl = 'https://drive.google.com/file/d/1JdjQHtWR-qOB9lDnUioIEjeltkl5FCyn/view?usp=sharing';
    // window.open(resumeUrl, '_blank');
    const resumeUrl ='Ashraful Hider Jaed Resume.pdf';
    const anchor = document.createElement('a');
    anchor.href=resumeUrl;
    anchor.download = 'Ashraful Hider Jaed Resume.pdf' 
    anchor.click();
};

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
        
        <section className="header flex flex-col-reverse md:flex-row">
            <div className="home-content sm:ms-2">
                <h2 className='sm:mt-4 text-slate-300'>Hello, This is</h2>
                <h1 className='text-lg md:text-2xl font-bold text-white'>Ashraful Hider Jaed</h1>
                
                <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "I am Font End Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "I am web Developer",
                1000,
                "I am React Developer",
                1000,
                "I am JavaScript Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="font-bold text-xl md:text-5xl h-5 md:h-8 text-primary"
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
            <p className='text-slate-300'>I am passionate about user experience and continuously iterate on designs to ensure <br /> optimal usability, accessibility, and a delightful journey for your website visitors.
                </p>
                <button className="btn btn-outline btn-info border-primary text-primary font-bold my-2" onClick={handleDownload}>Download Resume</button>
            </div>
            <div className='sm:mb-2'>
            <Tilt options={defaultOptions} style={{ }}>
                {/* <video src={video} controls></video> */}
                <img src={img} alt="" />
            </Tilt>
            </div>
        </section>
    );
};

export default Header;