import ProgressBar from "@ramonak/react-progress-bar";

import { FaSchool, FaUniversity } from "react-icons/fa";
import { RiSchoolFill } from "react-icons/Ri";



const EduSkill = () => {
  return (
    <div className="px-4 md:px-14 pt-16 bg-gradient-to-b from-green-800 to-gray-500">
      <h1 className="text-4xl font-bold text-white py-8">EDUCATION & SKILLS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-black shadow-lg md:w-3/4  w-full rounded-xl text-white p-8 h-96">
          <h1 className="text-2xl font-bold pt-2 pb-8">Education</h1>

          <div className="flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2 md:text-xl">
                <span>
                  <FaUniversity></FaUniversity>
                </span>
                <h1>Jagannath University,Dhaka</h1>
              </div>
              <p>Department of Mathematics</p>
              <p>2020 - Present</p>
            </div>

            <div>
              <div className="flex items-center gap-2 md:text-xl">
                <span>
                  <FaSchool></FaSchool>
                </span>
                <h1>Agrani School And Collage,Rajshahi</h1>
              </div>
              <p>2017 - 2019</p>
            </div>
            <div className="pb-8">
              <div className="flex items-center gap-2 md:text-xl">
                <span>
                  <RiSchoolFill></RiSchoolFill>
                </span>
                <h1>Dharabarisha High School,Natore</h1>
              </div>
              <p>Left 2017</p>
            </div>
          </div>
        </div>

        <div className="p-8 w-full">
          <h1 className="text-4xl md:text-xl text-white pb-4 font-bold md:text-left text-center ">My Skills</h1>
          <p className=" text-white pb-4">
            Experienced MERN stack developer adept at creating robust and
            scalable full-stack web applications. Proficient in MongoDB,
            Express.js, React.js, and Node.js, with a strong command of RESTful
            API development, UI/UX design, and data management. Committed to
            delivering high-quality code and exceptional user experiences while
            adhering to best practices and industry standards.
          </p>
          <div className="flex flex-col gap-4">
            <ProgressBar
              completed={70}
              bgColor="linear-gradient(to right,#62C8F5, #ac5bdf)"
              labelAlignment="left"
              labelColor="#fdf7f7"
              transitionDuration="3s"
              animateOnRender
              maxCompleted={100}
              customLabel="javaScript"
            />
            <ProgressBar
              completed={80}
              bgColor="linear-gradient(to right,#62C8F5, #ac5bdf)"
              labelAlignment="left"
              labelColor="#fdf7f7"
              transitionDuration="3s"
              animateOnRender
              maxCompleted={100}
              customLabel="React"
            />
            <ProgressBar
              completed={85}
              bgColor="linear-gradient(to right,#62C8F5, #ac5bdf)"
              labelAlignment="left"
              labelColor="#fdf7f7"
              transitionDuration="3s"
              animateOnRender
              maxCompleted={100}
              customLabel="Tailwind"
            />
            <ProgressBar
              completed={60}
              bgColor="linear-gradient(to right,#62C8F5, #ac5bdf)"
              labelAlignment="left"
              labelColor="#fdf7f7"
              transitionDuration="3s"
              animateOnRender
              maxCompleted={100}
              customLabel="MongoDB"
            />
            <ProgressBar
              completed={50}
              bgColor="linear-gradient(to right,#62C8F5, #ac5bdf)"
              labelAlignment="left"
              labelColor="#fdf7f7"
              transitionDuration="3s"
              animateOnRender
              maxCompleted={100}
              customLabel="Express.JS"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EduSkill;
