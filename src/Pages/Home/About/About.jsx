import img from '../../../assets/1.png'

const About = () => {
    return (
        <div className="my-16">
            <h1 className=" text-primary text-3xl md:text-6xl font-bold text-center">ABOUT ME</h1>
            <section className="flex justify-between align-middle">
            <div className="flex w-1/2">
          <img className='w-1/2' src={img} alt="" />
        </div>
        <div className="flex w-1/2 items-center text-justify">
                {/* <div className='flex-1'>
                    <img  src={img} alt="" />
                </div>
                <div className='flex-1'> */}
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quia facere? Quidem sint ducimus, eos repudiandae provident possimus at officia qui aliquam doloribus, dolorem temporibus veritatis, ad incidunt ratione dolor voluptas. Doloribus nulla consequatur sed odit, deleniti laboriosam tempora ab maxime consectetur nemo! Et, sint pariatur? Nam numquam provident ea.</p>
                </div>
            </section>
        </div>
    );
};

export default About;