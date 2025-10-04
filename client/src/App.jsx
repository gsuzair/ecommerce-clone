import './App.css'
import About from './screens/About/About';
import Blog from './screens/Blog/Blog';
import Contact from './screens/Contact/Contact';
import Feature from './screens/Features/Feature';
import HomePage from './screens/Home/HomePage';
import Shop from './screens/Shop/Shop';
import Signup from './screens/Signup/signUp'
import Dashboard from './screens/Admin/Dashboard/Dashboard'
import { Routes, Route } from "react-router-dom";
import Invoice from './screens/Admin/Invoice/Invoice';
import Billing from './screens/Admin/Billing/Billing';
import Order from './screens/Admin/Order/Order';
import Product from './screens/Admin/Product/Product';
import User from './screens/Admin/User/User';


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

		<Route path="/admin" element={<Dashboard />}/>
		<Route path="/admin/invoice" element={<Invoice />}/>
		<Route path="/admin/billing" element={<Billing />}/>
		<Route path="/admin/order" element={<Order />}/>
		<Route path="/admin/product" element={<Product />}/>
		<Route path="/admin/user" element={<User />}/>
	</Routes>
  )
}

export default App
