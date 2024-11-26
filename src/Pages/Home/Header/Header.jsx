import { TypeAnimation } from 'react-type-animation';
import img from '../../../assets/cover.png';
import { Tilt } from 'react-tilt';

const Header = () => {
  const handleDownload = () => {
    const resumeUrl = 'Ashraful Hider Jaed Resume.pdf';
    const anchor = document.createElement('a');
    anchor.href = resumeUrl;
    anchor.download = 'Ashraful Hider Jaed Resume.pdf';
    anchor.click();
  };

  const defaultOptions = {
    reverse: false,
    max: 25,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
  };

  return (
    <section
      className="header min-h-[90vh] bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-10 overflow-hidden"
    >
      {/* Text Section */}
      <div className="text-content flex-1 text-center md:text-left space-y-6">
        <h2 className="text-lg md:text-2xl text-gray-300 animate-fade-in">
          Hello, This is
        </h2>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white animate-fade-in-up">
          Ashraful Hider Jaed
        </h1>

        <TypeAnimation
          sequence={[
            "I am a Frontend Developer",
            1000,
            "I am a Web Developer",
            1000,
            "I am a React Developer",
            1000,
            "I am a JavaScript Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          className="font-semibold text-2xl md:text-4xl text-primary animate-pulse"
          repeat={Infinity}
        />

        <p className="text-gray-300 text-sm md:text-base animate-fade-in">
          I am passionate about user experience and continuously iterate on designs to ensure optimal usability, accessibility, and a delightful journey for your website visitors.
        </p>

        <button
          className="btn btn-primary text-white bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 px-6 py-3 rounded-full shadow-md transition-transform transform hover:scale-105 font-bold animate-fade-in"
          onClick={handleDownload}
        >
          Download Resume
        </button>
      </div>

      {/* Image Section */}
      <div className="image-content flex-1 flex justify-center items-center">
        <Tilt options={defaultOptions}>
          <img
            src={img}
            alt="Profile Cover"
            className="w-72 md:w-96 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 animate-tilt"
          />
        </Tilt>
      </div>
    </section>
  );
};

export default Header;
