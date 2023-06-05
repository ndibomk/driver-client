import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Navbar';
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Login from './pages/authentication/Login'
import Hero from './pages/Hero';
import Main from './pages/Main';
import Test from './pages/Test';
import { useDispatch } from 'react-redux';
import { setUser } from './redux/features/authSlice';
import Pedding from './pages/status/Pedding';
import Success from './pages/status/Success';
import Rejected from './pages/status/Rejected';
import CustomerOrders from './pages/Orders/CustomerOrders';
import AdminDashBoard from './pages/AdminDashBoard';
import SingleUser from './pages/users/SingleUser';
import UserOrders from './pages/users/UserOrders';
import Analytics from './pages/Analytics';
import Todo from './pages/test/Todo';
import Feedback from './pages/users/Feedback';
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Protected from './Protected';
import Control from './pages/review/Control';
import Invoice from './pages/users/Invoice';
import ActiveOrders from './pages/Orders/ActiveOrders';
import Error from './pages/Error';
import ForgotPassword from './pages/authentication/ForgotPassword';
function App() {
  
  const dispatch = useDispatch();
  const[data,setDate]=useState([])
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [showPopup, setShowPopup] = useState(false);
  const [language, setLanguage] = useState('');

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');
    if (!hasVisitedBefore) {
      setShowPopup(true);
    }
  }, []);

  const handleLanguageSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setShowPopup(false);
    localStorage.setItem('hasVisitedBefore', true);
    // Perform language change logic here (e.g., update language context, Redux state, etc.)
    // You may need to reload the page or re-render components to reflect the language change.
  };
  return (
    <div className='' style={{width:'100%'}}>
      <BrowserRouter>
      {/* <div className="popup"> */}
      {/*  */}

      {/* {showPopup && ( */}
        {/* // <div className="popup"> */}
          {/* <>Choose a Language</> */}
          {/* <button onClick={() => handleLanguageSelect('English')}>English</button> */}
          {/* <button onClick={() => handleLanguageSelect('Spanish')}>Spanish</button> */}
        {/* </div> */}
      {/* // )} */}
      {/* Rest of your application */}
    {/* </div> */}
    <ToastContainer/>
    {/* <Test/> */}
     <Header/>
     {/* <BrowserRouter> */}
    
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/review/:id' element={<Control/>}/>
     <Route path='/active-orders' element={<ActiveOrders/>}/>
     <Route path='/forget' element={<ForgotPassword/>}/>
     <Route path='*' element={<Error/>}/>

     <Route path='/admin' element={
      <Protected isLoggedIn={user}>
 <AdminDashBoard/>
     </Protected>
    }>
     <Route path='pending' element={<Todo/>}/>
     <Route index  element={<Success/>}/>
     <Route path='rejected' element={<Rejected/>}/>
     </Route>
     <Route path='/login' element={<Login/>}/>
     <Route path='/orders' element={<CustomerOrders/>}/>
     <Route path='/feedback/:id' element={<Feedback/>}/>
     {/* <ProtectedRoutes path="/dashboard" component={<Main/> }/> */}
     <Route path='/dashboard' element={
             <Main/>
          }/>
     <Route path='user/:id' element={<SingleUser/>}/>
     <Route path='/orders/:id' element={<UserOrders/>}/>
     <Route path='/invoice/:id' element={<Invoice/>}/>
     <Route path='/analytics' element={<Analytics/>}/>
     </Routes> 
     {/* <Home/> */}
     <Footer/>
     {/* </BrowserRouter> */}
     </BrowserRouter>

    </div>
  )
}

export default App
