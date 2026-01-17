import HomePage from "@/components/Home";
import Footer from "@/components/Footer";
// import About from "@/components/About/About";
// import Skills from "@/components/Skills";
// import Experience from "@/components/Experience/Experience";
// import Projects from "@/components/Projects/Projects";
// import Gallery from "@/components/Gallery";
// import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div id="hero">
        <HomePage />
      </div>
      {/* <div id="about-us">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="contact">
        <ContactUs />
      </div> */}
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
