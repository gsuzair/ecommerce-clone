import './App.css'
import About from './screens/About/About';
import Blog from './screens/Blog/Blog';
import Contact from './screens/Contact/Contact';
import Feature from './screens/Features/Feature';
import HomePage from './screens/Home/HomePage';
import Shop from './screens/Shop/Shop';
import Signup from './screens/Signup/signUp'
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <Routes>
		<Route path="/" element={<Signup />}/>
		<Route path="/home" element={<HomePage />}/>
		<Route path="/shop" element={<Shop />}/>
		<Route path="/blog" element={<Blog />}/>
		<Route path="/contact" element={<Contact />}/>
		<Route path="/feature" element={<Feature />}/>
		<Route path="/about" element={<About />}/>
	</Routes>
  )
}

export default App
