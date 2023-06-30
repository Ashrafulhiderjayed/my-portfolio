import { TypeAnimation } from 'react-type-animation';
import img from '../../../assets/cover.png'
import './Header.css';

const Header = () => {
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
            </div>
            <div className='sm:mb-2'>
                {/* <video src={video} controls></video> */}
                <img src={img} alt="" />
            </div>
        </section>
    );
};

export default Header;