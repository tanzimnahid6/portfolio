import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
    useEffect(() => {
      AOS.init({
        duration: 2000, // Animation duration in milliseconds
        once: true, // Only animate once
      });
    }, []);
  return (
    <div
      data-aos="fade-up"
      className="px-4 md:px-14 bg-gradient-to-b from-green-800 to-gray-500"
    >
      <h1 className="text-4xl md:text-5xl text-center md:text-left font-bold text-white pt-8 uppercase">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16 w-full place-items-center ">
        <div>
          <div
            data-aos="fade-left"
            className="card card-compact w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src="./toy-car-2.png"
                className="h-52 p-4 rounded-lg object-cover"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <div className="card-actions">
                <a
                  href="https://toy-shop-9d06b.web.app/"
                  className="btn btn-primary"
                >
                  Preview
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            data-aos="fade-right"
            className="card card-compact w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <img
                className="h-52 p-4 rounded-lg object-cover"
                src="./summer-camp.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <div className="card-actions ">
                <a
                  href="https://summer-camp-10287.web.app/"
                  className="btn btn-primary"
                >
                  Preview
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="./chef.png"
                className="h-52 p-4 rounded-lg object-cover"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <div className="card-actions ">
                <a
                  href="https://recepies-client-site.web.app/"
                  className="btn btn-primary"
                >
                  Preview
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
