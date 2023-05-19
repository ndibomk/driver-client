import React, { useEffect, useState } from "react";
import Register from "./Register";
import RegNext from "./RegNext";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { SlKey } from "react-icons/sl";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, register } from "../../redux/features/authSlice";
import { toast } from "react-toastify";
import Cards from "./RegNext";
function MainAuth() {
  const [isSignup, setIsSignup] = useState(true);
  const [location, setLocation] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [final, setFinal] = useState(false);
  const [phone, setPhone] = useState(false);
  const [signUp, setSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [tell, setTell] = useState("");
  const initialValues = {
    firstname: "",
    lastname: "",
    password: "",
  };

  console.log(tell);
  console.log(email);
  const [form, setForm] = useState({
    ...initialValues,
    email: "",
    tell: "",
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    setForm((prevForm) => ({
      ...prevForm,
      email,
      tell,
    }));
  }, [email, tell]);
  console.log("form", form);

  // const {  password, name } = form;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(register({ form, navigate, toast }));
  };

  const initialState = {
    email: "",
    password: "",
  };

  const [formValue, setUser] = useState(initialState);
  const { password } = formValue;

  const handleSubmit1 = (e) => {
    e.preventDefault();
    if (password) {
      dispatch(login({ formValue, navigate, toast }));
    }
  };

  const handleSignupClick = () => {
    e.preventDefault();

    setIsSignup(false);
    setIsLogin(false);
    setLocation(false);
  };
  const handleNextPhone = () => {
    setIsSignup(false);
    setIsLogin(false);
    setLocation(false);
    setPhone(true);
  };
  const handleFinal = () => {
    setIsSignup(false);
    setIsLogin(false);
    setLocation(false);
    setPhone(false);
    setFinal(true);
  };
  const handleFinalStep = () => {
    setIsSignup(false);
    setIsLogin(false);
    setLocation(false);
    setPhone(false);
    setFinal(false);
    setSignup(true);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLogin(true);
    setIsSignup(false);
    setLocation(false);
  };

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    setIsLogin(false);
    setIsSignup(false);
    setLocation(true);
    // Add your login logic here
  };

  const Back1 = () => {
    setIsSignup(false);
    setIsLogin(false);
    setLocation(false);
    setPhone(true);
    setFinal(false);
    setSignup(false);
  };
  const Back2 = () => {
    setIsSignup(true);
    setIsLogin(false);
    setLocation(false);
    setPhone(false);
    setFinal(false);
    setSignup(false);
  };
  const Back3 = () => {
    setIsSignup(false);
    setIsLogin(true);
    setLocation(false);
    setPhone(false);
    setFinal(false);
    setSignup(false);
  };
  const Back6 = () => {
    setIsSignup(true);
    setIsLogin(false);
    setLocation(false);
    setPhone(false);
    setFinal(false);
    setSignup(false);
  };
  const Back4 = () => {
    setIsSignup(false);
    setIsLogin(false);
    setLocation(false);
    setPhone(true);
    setFinal(false);
    setSignup(false);
  };

  return (
    <div>
      {isSignup && (
        <>
          <div className="register">
            <h3>Sign up to be a driver</h3>
            <form onSubmit={handleLoginSubmit} className="form">
              <div className="input">
                <span>
                  <MdLocationOn style={{ background: "" }} />
                </span>
                <input
                  type="text"
                  placeholder=" &nbsp; Your postal code/ zip code"
                />
              </div>
              <button onClick={handleLoginSubmit} className="reg-btn">
                Start earning Today
              </button>
              <button onClick={handleLocationSubmit} className="reg-btns">
                Existing user? login
              </button>
            </form>
          </div>
        </>
      )}
      {isLogin && (
        <div className= "register2">
          <h3>Sign up to become a driver </h3>
          <form onSubmit={handleNextPhone} className="form">
            <div className="input">
              <span>
                <MdEmail style={{ background: "" }} />
              </span>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder=" &nbsp; Email Address"
              />
            </div>
            <div className="next-reg">
              <div className="icon">
                <AiOutlineArrowLeft
                  fontWeight={600}
                  style={{ cursor: "pointer", fontWeight: "800" }}
                  size={30}
                  onClick={Back6}
                  color="#700841"
                />
              </div>
              <button className="regbtnnext">Next</button>
            </div>
          </form>
        </div>
        // <div className='register'>
        //   <form onSubmit={handleNextPhone} className='regnextform'>
        //     <h2>Sign up to become a driver</h2>
        //     <input type="text" classname="" placeholder='Email address' />
        //     <div className="next-reg">
        //       <BsArrowLeftSquareFill size={35} color="#700841" />
        //       <button className='regbtnnext'>Next</button>

        //     </div>
        //   </form>
        // </div>
      )}
      {phone && (
        <div className="register4">
          <h3>Sign up to become a driver </h3>
          <form onSubmit={handleFinal} className="form">
            <div className="input">
              <span>
                <FaPhoneAlt style={{ background: "" }} />
              </span>
              <input
                onChange={(e) => setTell(e.target.value)}
                type="number"
                placeholder=" &nbsp; Your phone number"
              />
            </div>
            <div className="next-reg">
              <div className="icon">
                <AiOutlineArrowLeft
                  fontWeight={600}
                  style={{ cursor: "pointer", fontWeight: "800" }}
                  size={30}
                  onClick={Back3}
                  color="#700841"
                />
              </div>
              <button className="regbtnnext">Next</button>
            </div>
          </form>
        </div>
      )}
      {final && (
        <div className="register1">
          <h3>Sign up to become a driver </h3>
          <form onSubmit={handleSubmit} className="form">
            <div className="input">
              <input
                type="text"
                onChange={(e) =>
                  setForm({ ...form, firstname: e.target.value })
                }
                placeholder=" First Name"
              />
            </div>
            <div className="input">
              <input
                type="text"
                onChange={(e) => setForm({ ...form, lastname: e.target.value })}
                placeholder=" Last Name"
              />
            </div>
            <div className="input">
              <span>
                <SlKey style={{ background: "" }} />
              </span>
              <input
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                type="password"
                placeholder=" &nbsp; Password "
              />
            </div>
            <div className="input">
              <span>
                <SlKey style={{ background: "" }} />
              </span>
              <input type="password" placeholder=" &nbsp; Confirm Password" />
            </div>
            <div className="next-reg">
              <div className="icon">
                <AiOutlineArrowLeft
                  fontWeight={600}
                  style={{ cursor: "pointer", fontWeight: "800" }}
                  size={30}
                  onClick={Back4}
                  color="#700841"
                />
              </div>
              {/* <Link to="/dashboard"> */}
              <button onSubmit={handleFinalStep} className="regbtnnext">
                SignUp
              </button>
              {/* </Link> */}
            </div>
          </form>
        </div>
      )}
      {/* {signUp && (
  
)} */}
      {location && (
        <div className="register1">
          <h3>Driver Login</h3>
          <form onSubmit={handleSubmit1} className="form">
            <div className="input">
              <span>
                <MdEmail style={{ background: "" }} />
              </span>
              <input
                type="email"
                onChange={(e) =>
                  setUser({ ...formValue, email: e.target.value })
                }
                placeholder=" &nbsp; email"
              />
            </div>
            <div className="input">
              <span>
                <SlKey style={{ background: "" }} />
              </span>
              <input
                type="password"
                onChange={(e) =>
                  setUser({ ...formValue, password: e.target.value })
                }
                placeholder=" &nbsp; password"
              />
            </div>
            <button className="reg-btn">
              {/* {" "} */}
              Log in
            </button>
          </form>
          <button className="reg-btns" onClick={Back6}>
            New user? Sign up
          </button>
        </div>
      )}
    </div>
  );
}

export default MainAuth;
