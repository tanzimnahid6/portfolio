import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-b from-green-800 to-gray-500  h-screen   items-center justify-between w-full gap-4">
        <div className="z-10">
          <div className="ml-12 text-white">
            <h1 className="text-[40px]">Hello,I am </h1>
            <p className="text-[55px] font-bold bg-gradient-to-r from-cyan-300 to-indigo-600 bg-clip-text text-transparent">
              Aljubayer Hossain
            </p>
            <TypeAnimation
              className="text-[20px] "
              sequence={[
                // Same substring at the start will only be typed out once, initially
                `I Am Dedicated   Web Developer`,
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "I Am Dedicated Font End Developer",
                1000,
                "I Am Dedicated React Developer",
                1000,
                "I Am Dedicated javaScript Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
            <p className="text-[20px] mt-8">
              Highly skilled MERN stack developer with a strong passion for
              creating engaging and interactive web application. Seeking a
              challenging role where I can leverage my expertise in front-end
              development and contribute to the success of development team .
            </p>
            <div className="mt-12">
              <button className="bg-transparent hover:bg-blue-500 text-cyan-300 text-2xl font-bold hover:text-white py-2 px-4 border border-cyan-500 hover:border-transparent rounded-lg">
                Contact
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="w-[380px] h-[380px] rounded-full  bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            src="./image.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
