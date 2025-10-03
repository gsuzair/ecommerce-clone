import './App.css'
import HomePage from './screens/Home/HomePage';
import Signup from './screens/Signup/signUp'
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <Routes>
			<Route path="/" element={<Signup />}/>
			<Route path="/home" element={<HomePage />}/>
		</Routes>
  )
}

export default App
