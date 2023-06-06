import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardFooter,
  MDBValidation,
  MDBBtn,
  MDBIcon,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  forgetPassword,
  googleSignIn,
  login,
} from "../../redux/features/authSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const ForgotPassword = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`https://erytyu.onrender.com/users/${id}`);

        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  const initialState = {
    email: "",
    message: "",
  };

  // const [email,setEmail]=useState('')
  const [formValue, setFormValue] = useState(initialState);
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const { message, email } = formValue;
  console.log("formvalue", formValue);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state.auth }));

  const { id } = useParams();
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  // setFormValue((prevForm) => ({
  // ...prevForm,
  // email:products.email,
  //
  // }));
  // }, [email]);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleLogin = () => {};
  useEffect(() => {});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      dispatch(forgetPassword({ formValue, navigate, toast }));
      alert("succes");
      toast.success(`email sent to ${products.name}`);
      navigate("/");
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const devEnv = process.env.NODE_ENV !== "production";

  function Notify() {
    toast("You clicked the button");
  }

  return (
    <>
      <ToastContainer />
      <div
        style={{
          margin: "auto",
          padding: "3rem",
          width: "100%",
          alignContent: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
        }}
        className="home-main"
      >
        <MDBIcon fas icon="user-circle" className="fa-2x" />
        <h5>
          {" "}
          this is the users email {products.email} , copy and paste it on the
          input field
        </h5>
        {/* <All/> */}
        <MDBCardBody style={{ display: "flex", flexDirection: "column" }}>
          <MDBValidation
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={handleSubmit}
            noValidate
            className="row g-3"
          >
            <div
              style={{ display: "flex", gap: "1rem", flexDirection: "" }}
              className="col-md-12"
            >
              <h3> Email</h3>
              <MDBInput
                style={{ backgroundColor: "white" }}
                type="email"
                value={email}
                name="email"
                onChange={onInputChange}
                required
                invalid
                validation="Please provide your email"
              />
            </div>
            <div
              style={{ display: "flex", gap: "1rem", height: "" }}
              className="col-md-12"
            >
              <h3> Message</h3>
              <MDBInput
                style={{ backgroundColor: "white", height: "3rem" }}
                // label="Message"
                type="text"
                value={message}
                name="message"
                onChange={onInputChange}
                required
                invalid
                validation="Please provide your message"
              />
            </div>
            <div className="col-12">
              <MDBBtn style={{ width: "100%" }} className="mt-2">
                {loading && (
                  <MDBSpinner
                    size="sm"
                    role="status"
                    tag="span"
                    className="me-2"
                    onClick={Notify}
                  />
                )}
                Submit
              </MDBBtn>
            </div>
          </MDBValidation>
          <br />
          {/* <GoogleLogin
            clientId="Your Client Id"
            render={(renderProps) => (
              <MDBBtn
                style={{ width: "100%" }}
                color="danger"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <MDBIcon className="me-2" fab icon="google" /> Google Sign In
              </MDBBtn>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          /> */}
        </MDBCardBody>
      </div>
    </>
  );
};

export default ForgotPassword;
