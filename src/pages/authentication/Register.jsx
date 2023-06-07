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
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setErrorMessage("");
  };

  const numberRange = Array.from(
    { length: 78299 - 78201 + 1 },
    (_, index) => index + 78201
  ).filter((number) => number !== 78234 && number !== 78236);

  console.log("range", numberRange);

  const handleNext = (e) => {
    e.preventDefault();

    if (inputValue === "") {
      setErrorMessage("Please enter a number.");
    } else {
      const number = parseInt(inputValue, 10);
      if (numberRange.includes(number)) {
        // Number is within the range, do something
        setStep(step + 1);
        toast.success("Zip code is within the range");
      } else {
        toast.error("Invalid number. Please enter a number within the range.");
      }
    }
  };
  const handlePrev = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setStep(step + 4);
  };
  const EmailNext = () => {
    setStep(step + 1);
  };
  const [email, setEmail] = useState("");
  const [tell, setTell] = useState("");
  const initialValues = {
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
    task: "",
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
    if (form.task !== form.confirmPassword) {
      return toast.error("Password should match");
    }
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
            <form onSubmit={handleNext} className="form">
              <div className="input">
                <span>
                  <MdLocationOn style={{ marginBottom: ".6rem" }} />
                </span>
                <input
                  type="number"
                  required
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder=" &nbsp; Your postal code/ zip code"
                />
              </div>

              <button className="reg-btn">Start earning Today</button>
              <button onClick={handleLogin} className="reg-btns">
                Existing user ? login
              </button>
            </form>
          </div>
        )}
        {step === 2 && (
          <div className="register">
            <form onSubmit={EmailNext} className="form">
              <h3 style={{ marginBottom: "1.6rem" }}>Sign up to be a driver</h3>

              <div style={{ marginBottom: "2rem" }} className="input">
                <span>
                  <MdEmail style={{ marginBottom: ".6rem" }} />
                </span>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder=" &nbsp; Email Address"
                  required
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
                  type="submit"
                  style={{ marginBottom: "" }}
                  // onClick={EmailNext}
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
            <form onSubmit={handleNext} className="form">
              <h3 style={{ marginBottom: "1.6rem" }}>
                Sign up to become a driver{" "}
              </h3>

              <div style={{ marginBottom: "2rem" }} className="input">
                <span>
                  <FaPhoneAlt style={{ marginBottom: ".6rem" }} />
                </span>
                <input
                  onChange={(e) => setTell(e.target.value)}
                  type="number"
                  placeholder=" &nbsp; Your phone number"
                  required
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

                <button className="regbtnnext">Next</button>
              </div>
            </form>
          </div>
        )}
        {step === 4 && (
          <>
            {loading ? (
              <div className="spinner">Loading...</div>
            ) : (
              <div className="register">
                <h3 style={{ marginTop: "3rem" }}>
                  Sign up to become a driver{" "}
                </h3>
                <form onSubmit={handleSubmit} className="form">
                  <div style={{ marginTop: "0rem" }} className="input">
                    <input
                      type="text"
                      required
                      onChange={(e) =>
                        setForm({ ...form, firstname: e.target.value })
                      }
                      placeholder=" First Name"
                    />
                  </div>
                  <div className="input">
                    <input
                      required
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
                    <input
                      required
                      type="password"
                      placeholder=" &nbsp; Confirm Password"
                      onChange={(e) =>
                        setForm({ ...form, confirmPassword: e.target.value })
                      }
                    />
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
            )}
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
                      <MdEmail
                        style={{ background: "", marginBottom: ".6rem" }}
                      />
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
                      <SlKey style={{ marginBottom: ".6rem" }} />
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
                  {/* <Link to="/forget"> */}
                    {/* <button */}
                      {/* // className="reg-btns" */}
                      {/* // onClick={(e) => setStep(step - 4)} */}
                    {/* // > */}
                      {/* New user? Sign up */}
                    {/* </button> */}
                  {/* </Link> */}
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
