
import { BiLogoFirebase } from "react-icons/bi";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Tools = () => {
      useEffect(() => {
        AOS.init({
          duration: 2000, // Animation duration in milliseconds
          once: true, // Only animate once
        });
      }, []);
    return (
      <div className="bg-gradient-to-b to-green-800 from-gray-500 px-2 md:px-14">
        <h1 className="text-4xl text-white font-bold py-8 text-center md:text-left  ">
          TOOLS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 place-content-center w-full ">
          <div
            data-aos="fade-right"
            className="bg-black text-white p-4 rounded-lg m-4 shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300 "
          >
            <div className="flex gap-2">
              <span>
                <BiLogoFirebase color="yellow" size={48} />
              </span>
              <div>
                <h1 className="text-2xl font-bold">Firebase</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis fugiat fugit sunt provident explicabo iusto
                  deserunt expedita asperiores cupiditate mollitia molestias
                  autem aspernatur modi pariatur quidem itaque, veritatis hic,
                  doloremque officiis suscipit dolor dicta a sed. Dolorem nam
                  fugit
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="bg-black text-white p-4 rounded-lg m-4 shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex gap-2">
              <span>
                <BiLogoFirebase color="yellow" size={48} />
              </span>
              <div>
                <h1 className="text-2xl font-bold">Firebase</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis fugiat fugit sunt provident explicabo iusto
                  deserunt expedita asperiores cupiditate mollitia molestias
                  autem aspernatur modi pariatur quidem itaque, veritatis hic,
                  doloremque officiis suscipit dolor dicta a sed. Dolorem nam
                  fugit
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="bg-black text-white p-4 rounded-lg m-4 shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex gap-2">
              <span>
                <BiLogoFirebase color="yellow" size={48} />
              </span>
              <div>
                <h1 className="text-2xl font-bold">Firebase</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis fugiat fugit sunt provident explicabo iusto
                  deserunt expedita asperiores cupiditate mollitia molestias
                  autem aspernatur modi pariatur quidem itaque, veritatis hic,
                  doloremque officiis suscipit dolor dicta a sed. Dolorem nam
                  fugit
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-down"
            className="bg-black text-white p-4 rounded-lg m-4 shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex gap-2">
              <span>
                <BiLogoFirebase color="yellow" size={48} />
              </span>
              <div>
                <h1 className="text-2xl font-bold">Firebase</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis fugiat fugit sunt provident explicabo iusto
                  deserunt expedita asperiores cupiditate mollitia molestias
                  autem aspernatur modi pariatur quidem itaque, veritatis hic,
                  doloremque officiis suscipit dolor dicta a sed. Dolorem nam
                  fugit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Tools;
