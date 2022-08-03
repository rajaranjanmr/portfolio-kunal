import "./App.css";
import Header from "./components/Header";
import MainIntro from "./components/MainIntro";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Blog from "./components/Blog";
import About from "./components/About";
import Footer from "./components/Footer";
import NeogCampProjects from "./components/NeogCampProjects";
function App() {
	return (
		<div className="App">
			<Header />
			<MainIntro />
			{/* <Experience /> */}
			<Projects />
			<NeogCampProjects />
			{/* <Blog /> */}
			<Skills />
			<About />
			<Footer />
		</div>
	);
}

export default App;
