import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { SlKey } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import { login, register } from "../../redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const { user, loading } = useSelector((state) => ({ ...state.auth }));
  console.log("status", loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };
  const handlePrev = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setStep(step + 4);
  };

  const [email, setEmail] = useState("");
  const [tell, setTell] = useState("");
  const initialValues = {
    firstname: "",
    lastname: "",
    password: "",
    task:''
  };

  console.log(tell);
  console.log(email);
  const [form, setForm] = useState({
    ...initialValues,
    email: "",
    tell: "",
  });
  useEffect(() => {
    setForm((prevForm) => ({
      ...prevForm,
      email,
      tell,
    }));
  }, [email, tell]);
  console.log("form", form);
  const initialState = {
    email: "",
    task: "",
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(register({ form, navigate, toast }));
  };
  const [formValue, setUser] = useState(initialState);
  const { task } = formValue;

  const handleSubmit1 = (e) => {
    e.preventDefault();
    if (task) {
      dispatch(login({ formValue, navigate, toast }));
    }
  };
  return (
    <div className="MultiStepForm">
      <div
        className="Card"
        style={{
          height: step === 1 || step === 4 || step == 5 ? "490px" : "380px",
        }}
      >
        {step === 1 && (
          <div className="register">
            <h3 style={{ marginTop: "4.8rem" }}>
              Sign up to be a driver
              {/* {user.loading===true ? 'hello':'hii'} */}
            </h3>
            <form className="form">
              <div className="input">
                <span>
                  <MdLocationOn style={{ background: "" }} />
                </span>
                <input
                  type="text"
                  placeholder=" &nbsp; Your postal code/ zip code"
                />
              </div>

              <button onClick={handleNext} className="reg-btn">
                Start earning Today
              </button>
              <button onClick={handleLogin} className="reg-btns">
                Existing user? login
              </button>
            </form>
          </div>
        )}
        {step === 2 && (
          <div className="register">
            <form className="form">
              <h3 style={{ marginBottom: "1.6rem" }}>Sign up to be a driver</h3>

              <div style={{ marginBottom: "2rem" }} className="input">
                <span>
                  <MdEmail style={{ background: "" }} />
                </span>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder=" &nbsp; Email Address"
                />
              </div>
              <div style={{ marginBottom: "3rem" }} className="next-reg">
                <div className="icon">
                  <AiOutlineArrowLeft
                    fontWeight={600}
                    style={{ cursor: "pointer", fontWeight: "800" }}
                    size={30}
                    onClick={handlePrev}
                    color="#700841"
                  />
                </div>

                <button
                  style={{ marginBottom: "" }}
                  onClick={(e) => setStep(step + 1)}
                  className="regbtnnext"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}
        <div className="Card"></div>
        {step === 3 && (
          <div className="register">
            <form className="form">
              <h3 style={{ marginBottom: "1.6rem" }}>
                Sign up to become a driver{" "}
              </h3>

              <div style={{ marginBottom: "2rem" }} className="input">
                <span>
                  <FaPhoneAlt style={{ background: "" }} />
                </span>
                <input
                  onChange={(e) => setTell(e.target.value)}
                  type="number"
                  placeholder=" &nbsp; Your phone number"
                />
              </div>
              <div style={{ marginBottom: "3rem" }} className="next-reg">
                <div className="icon">
                  <AiOutlineArrowLeft
                    fontWeight={600}
                    style={{ cursor: "pointer", fontWeight: "800" }}
                    size={30}
                    onClick={handlePrev}
                    color="#700841"
                  />
                </div>

                <button onClick={handleNext} className="regbtnnext">
                  Next
                </button>
              </div>
            </form>
          </div>
        )}
        {step === 4 && (
          <>
          {loading ? (
      <div className="spinner">Loading...</div>

          ):
          <div className="register">
            <h3 style={{ marginTop: "3rem" }}>Sign up to become a driver </h3>
            <form onSubmit={handleSubmit} className="form">
              <div style={{ marginTop: "0rem" }} className="input">
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
                  onChange={(e) =>
                    setForm({ ...form, lastname: e.target.value })
                  }
                  placeholder=" Last Name"
                />
              </div>
              <div className="input">
                <span>
                  <SlKey style={{ background: "" }} />
                </span>
                <input
                  onChange={(e) =>
                    setForm({ ...form, task: e.target.value })
                  }
                  type="password"
                  placeholder=" &nbsp; Password"
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
                    onClick={handlePrev}
                    color="#700841"
                  />
                </div>

                <button className="regbtnnext">SignUp</button>
              </div>
            </form>
          </div>
        }
          </>
        )}
        {step === 5 && (
          <>
            {loading ? (
      <div className="spinner">Loading...</div>
      ) : (
              <div className="register">
                <h3 style={{ marginTop: "3rem" }}>Driver Login</h3>
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
                        setUser({ ...formValue, task: e.target.value })
                      }
                      placeholder=" &nbsp; password"
                    />
                  </div>
                  {loading ? (
                          <div className="spinner">Loading...</div>

                  ) : (
                    <button className="reg-btn">
                      {/* {" "} */}
                      Log in
                    </button>
                  )}
                  {/* </Link> */}
                  <button
                    className="reg-btns"
                    onClick={(e) => setStep(step - 4)}
                  >
                    New user? Sign up
                  </button>
                </form>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default MultiStepForm;
