import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import HeadingTitle from "../../HeadingTitle/HeadingTitle";


const Skills = () => {
    const skills = [
        {
          color: "#e54c21",
          value: 90,
          image: "https://www.svgrepo.com/show/452228/html-5.svg",
        },
        {
          color: "#1172b8",
          value: 70,
          image: "https://www.svgrepo.com/show/452185/css-3.svg",
        },
        {
          color: "#7431f9",
          value: 95,
          image: "https://www.svgrepo.com/show/303293/bootstrap-4-logo.svg",
        },
        {
            color: "#44a8b3",
            value: 70,
            image: "https://www.svgrepo.com/show/374118/tailwind.svg",
        },
        {
            color: "#f0db4f",
            value: 80,
            image: "https://www.svgrepo.com/show/353925/javascript.svg",
        },
        {
          color: "#0c9fcb",
          value: 80,
          image: "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg",
        },
        {
            color: "#fcca3f",
            value: 60,
            image: "https://www.svgrepo.com/show/373595/firebase.svg",
          },  
        {
          color: "#8cc84b",
          value: 60,
          image: "https://www.svgrepo.com/show/452075/node-js.svg",
        },
        {
          color: "#13aa52",
          value: 50,
          image: "https://www.svgrepo.com/show/331488/mongodb.svg",
        },
        {
            color: "#ffffff",
            value: 50,
            image: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
          },
      ];
    return (
        <>
        <HeadingTitle text="SKILLS" />
        <div className="grid md:grid-cols-4 items-center gap-5 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative mx-auto mt-5"
              data-aos="zoom-in"
              data-aos-duration="300"
            >
              <CircularProgressBar
                colorCircle="#4a4a4a"
                strokeBottom={6}
                round
                colorSlice={skill.color}
                size={150}
                fontSize="1em"
                percent={skill.value}
                fontColor="#ffffff"
                textPosition="1.5em"
              >
                <img
                  src={skill.image}
                  style={{
                    borderRadius: "50%",
                    left: "50%",
                    padding: "2px",
                    position: "absolute",
                    top: "50%",
                    transform: "translate(-50%, -90%)",
                    width: "50px",
                    height: "50px",
                  }}
                  alt="Random image"
                />
              </CircularProgressBar>
            </div>
          ))}
        </div>
        </>
    );
};

export default Skills;