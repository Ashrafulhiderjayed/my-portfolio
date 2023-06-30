import img from '../../../assets/1.png'

const About = () => {
    return (
        <div className="my-16">
            <h1 className=" text-primary text-3xl md:text-6xl font-bold text-center my-12">ABOUT ME</h1>
            <section className="flex justify-between align-middle">
            <div className="flex w-1/2">
          <img className='w-3/4 object-cover' src={img} alt="" />
        </div>
        <div className="flex w-1/2 items-center text-justify">
                {/* <div className='flex-1'>
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className='flex-1  items-center text-justify'> */}
                <div className='text-slate-300'>
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