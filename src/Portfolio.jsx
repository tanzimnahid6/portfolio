import About from "./Components/About/About";
import Banner from "./Components/Banner";
import EduSkill from "./Components/Education&Skill/EduSkill";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/NavBar";
import Projects from "./Components/Projects/Projects";
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
      <hr />
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
};

export default Portfolio;
