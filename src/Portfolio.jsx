import About from "./Components/About/About";
import Banner from "./Components/Banner";
import EduSkill from "./Components/Education&Skill/EduSkill";
import Navbar from "./Components/Header/NavBar";
import Tools from "./Components/Tools/Tools";
const Portfolio = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <hr />
      <Banner></Banner>

      <hr />
      <About></About>
      <hr />
      <EduSkill></EduSkill>
      <hr />
      <Tools></Tools>
    </div>
  );
};

export default Portfolio;
