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
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword, googleSignIn, login } from "../../redux/features/authSlice";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const initialState = {
  email: "",
  
};

const ForgotPassword = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const { email, password } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user}=useSelector((state)=>({...state.auth}))

  const userId =user?.result?.role
console.log(userId);
  useEffect(() => {
    error && toast.error(error);
  }, [error]);

const handleLogin=()=>{

}
useEffect(()=>{
  
})

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email ) {
      dispatch(forgetPassword({ formValue, navigate, toast }));
     alert('succes')
     toast('check your email for a reset link')
     navigate('/')
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
    <ToastContainer/>
    <div style={{
        margin: "auto",
        padding: "3rem",
        width:'100%',
        alignContent: "center",
       display:'flex',
       alignItems:'center'
      }} className='home-main'>
        

   
    
   
        <MDBIcon fas icon="user-circle" className="fa-2x" />
        <h5>Sign In</h5>
        {/* <All/> */}
        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
            <div   className="col-md-12">
              <MDBInput
             
                label="Email"
                type="email"
                value={email}
                name="email"
                onChange={onInputChange}
                required
                invalid
                validation="Please provide your email"
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
       
      
    </div></>
  );
};

export default ForgotPassword;