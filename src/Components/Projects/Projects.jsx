

const Projects = () => {
    return (
      <div className="px-4 md:px-14 bg-gradient-to-b from-green-800 to-gray-500">
        <h1 className="text-4xl md:text-5xl text-center md:text-left font-bold text-white pt-8 uppercase">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full place-content-center">
            <div>p1</div>
            <div>p2</div>
            <div>p3</div>
        </div>
      </div>
    );
};

export default Projects;