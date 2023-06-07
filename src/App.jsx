import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./pages/authentication/Login";
import Hero from "./pages/Hero";
import Main from "./pages/Main";
import Test from "./pages/Test";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/features/authSlice";
import Pedding from "./pages/status/Pedding";
import Success from "./pages/status/Success";
import Rejected from "./pages/status/Rejected";
import CustomerOrders from "./pages/Orders/CustomerOrders";
import AdminDashBoard from "./pages/AdminDashBoard";
import SingleUser from "./pages/users/SingleUser";
import UserOrders from "./pages/users/UserOrders";
import Analytics from "./pages/Analytics";
import Todo from "./pages/test/Todo";
import Feedback from "./pages/users/Feedback";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Protected from "./Protected";
import Control from "./pages/review/Control";
import Invoice from "./pages/users/Invoice";
import ActiveOrders from "./pages/Orders/ActiveOrders";
import Error from "./pages/Error";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import { Button, Modal } from "react-bootstrap";
import Not from "./pages/users/Not";
import MainSep from "./pages/MainSep";
// import Not from "./Not";
function App() {
  const dispatch = useDispatch();
  const [data, setDate] = useState([]);
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [show, setShow] = useState(true);
  const [language, setLanguage] = useState('');

  useEffect(() => {
    const isLanguageSelected = localStorage.getItem('languageSelected');
    if (isLanguageSelected) {
      setShow(false);
    }
  }, []);

  const handleLanguageSelect = (selectedLanguage) => {
    localStorage.setItem('languageSelected', true);
    setLanguage(selectedLanguage);
    setShow(false);
    // Implement language selection logic here
  };
  return (
    <div className="" style={{ width: "100%" }}>
      <BrowserRouter>


      <Modal show={show} onHide={() => setShow(false)} backdrop="static">
      <Modal.Header >
        {/* <Modal.Title>Welcome to the Application</Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <p>Please select your preferred language:</p>
        <Button variant="primary" onClick={() => handleLanguageSelect('english')}>
          English
        </Button>{' '}
        <Button variant="primary" onClick={() => handleLanguageSelect('spanish')}>
          Spanish
        </Button>
      </Modal.Body>
    </Modal>

        <ToastContainer />
        {/* <Test/> */}
        <Header />
        {/* <BrowserRouter> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/review/:id" element={<Control />} />
          <Route path="/active-orders" element={<ActiveOrders />} />
          <Route path="/forget/:id" element={<ForgotPassword />} />
          <Route path="*" element={<Error />} />

          <Route
            path="/admin"
            element={
              // <Protected isLoggedIn={user}>
                <AdminDashBoard />
              // </Protected>
            }
          >
            <Route path="pending" element={<Todo />} />
            <Route index element={<Success />} />
            <Route path="rejected" element={<Rejected />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<CustomerOrders />} />
          <Route path="/feedback/:id" element={<Feedback />} />
          {/* <ProtectedRoutes path="/dashboard" component={<Main/> }/> */}
          <Route path="/dashboard" element={<Main />} />
          <Route path="user/:id" element={<SingleUser />} />
          <Route path="/orders/:id" element={<UserOrders />} />
          <Route path="/invoice/:id" element={<Invoice />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="admin/nots/:id" element={<Not />} />
          <Route path="main" element={<MainSep />} />
        </Routes>
        {/* <Home/> */}
        <Footer />
        {/* </BrowserRouter> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
