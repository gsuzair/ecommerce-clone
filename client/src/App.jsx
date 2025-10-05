import './App.css'
import AppRoutes from './routes/Routes'
import About from './screens/About/About';
import Blog from './screens/Blog/Blog';
import Contact from './screens/Contact/Contact';
import Feature from './screens/Features/Feature';
import HomePage from './screens/Home/HomePage';
import Shop from './screens/Shop/Shop';
import Signup from './screens/Signup/signUp';
import SignIn from './screens/SignIn/SignIn';
import Dashboard from './screens/Admin/Dashboard/Dashboard';
import { Routes, Route } from "react-router-dom";
import Invoice from './screens/Admin/Invoice/Invoice';
import Billing from './screens/Admin/Billing/Billing';
import Order from './screens/Admin/Order/Order';
import Product from './screens/Admin/Product/Product';
import User from './screens/Admin/User/User';


function App() {

  return (
    <AppRoutes />
  )
}

export default App
