import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Requirement from "./Requirement";
import About from "./About";
import Footer from "../components/Footer";
import Questions from "./Q&A";
import Partnership from "./Partnership";
import RegNext from "./authentication/RegNext";
import ExpenseTracker from "./Draw";
import TestForm from "../components/TestForm";
import Test from "./Circles";
import Cards from "./authentication/RegNext";
// import App from "./authentication/Register";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import App from "./review/RevMain";
// import App from "./test/App";
function Home() {
  const [authenticated, setauthenticated] = useState(null);
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state.auth }));

  useEffect(() => {
    const loggedInUser = localStorage.getItem("profile");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
    console.log('auth',loggedInUser);
  }, []);
  if (user?.result?.role==='admin') {
    navigate("/admin");
  }else if(user?.reulst?.role==='driver'){
    navigate("/dashboard");
  } else {
    return (
      <div style={{width:'100%'}}>
        {/* <Test/> */}
        <App/>
        <Hero />
        <Requirement />
        <About />
        <Questions />
        <Partnership />
        {/* <App/> */}
        {/* <TestForm/> */}
        {/* <Cards/> */}
      </div>
    );
  }
}

export default Home;
