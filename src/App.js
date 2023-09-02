import { NavBar } from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Demo from './components/Demo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className="App">
			<NavBar />
			<Home />
			<Demo />
			<About />
			<Skills />
			<Work />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
