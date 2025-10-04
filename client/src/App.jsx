import './App.css'
import Signup from './screens/Signup/signUp'
import SignIn from './screens/SignIn/SignIn'
import { Routes, Route } from "react-router-dom";


function App() {

  return (
   <Routes>
			<Route path="/" element={<SignIn />}/>
      <Route path="/Signup" element={<Signup />}/>
		</Routes>
  )
}

export default App
