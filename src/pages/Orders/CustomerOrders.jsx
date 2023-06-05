// import StarRateIcon from '@mui/icons-material/StarRate';
import React, { useEffect, useState } from "react";
// import Profile from "../WebcamComponent";
import Webcam from "react-webcam";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createProject } from "../../redux/features/productSlice";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import AddTodo from "../review/Review";
// import App from "../review/RevMain";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import App from "../review/RevMain";
const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: 200,
  height: 200,
  facingMode: "environment",
};
const CustomerOrders = () => {
  const dispatch = useDispatch();
  const [picture, setPicture] = useState("");
  const [cameraAllowed, setCameraAllowed] = useState(false);

  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    try {
      const pictureSrc = webcamRef.current.getScreenshot();
      setPicture(pictureSrc);
      setCameraAllowed(true);
    } catch (error) {
      setCameraAllowed(false);
      console.error("Camera access denied:", error);
    }
  });
  const { user } = useSelector((state) => ({ ...state.auth }));
  // const { id } = user?.result?._id;
  const [products, setProduct] = useState([]);

  // useEffect(() => {
  // async function fetchData() {
  // try {
  // const res = await axios.get(
  // `https://erytyu.onrender.com/products/userTours/${id}`
  // );
  // setProduct(res.data);
  // } catch (error) {
  // console.log(error);
  // }
  // }
  // fetchData();
  // }, []);
  function compare(a, b) {
    if (a._id < b._id) {
      return 1;
    }
    if (a._id > b._id) {
      return -1;
    }
    return 0;
  }
  const [invoice, setInvoice] = useState([]);
  const [invoice1, setInvoice1] = useState("");
  // console.log('invoices',invoice);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`https://erytyu.onrender.com/invoice`);
        res.data.sort(compare);
        const result = res.data.filter((_, index) => index < 1);

        setInvoice(result);
        setInvoice1(result[0].address);
        console.log("results", result[0].address);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  const { userTours, loading } = useSelector((state) => ({ ...state.tour }));
  const userId = user?.result?._id;

  // const { id } = user?.result?._id;
  const [userOrders, setUserOrders] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://erytyu.onrender.com/products/userTours/${userId}`
        );
        setUserOrders(res.data);
        console.log("useroders", userOrders);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const [orders, setOrders] = useState([]);
  // useEffect(()=>{
  // if(invoice[0].userId===user?.result?._id){
  // alert('you have a new invoice notification')
  // }
  // })
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`https://erytyu.onrender.com/products`);
        setOrders(res.data);
        // console.log("datauuuuu", res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  const initialState = {
    firstname: "",
    phone: "",
    lastname: "",
    address: "",
  };
  const handleButtonClick = () => {
    const address = invoice1; // Replace with your desired address
    const encodedAddress = encodeURIComponent(address);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.location.href = mapsUrl;
  };

  // console.log('mapsUrl',invoice1);
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    setForm((prevForm) => ({
      ...prevForm,
      picture,
    }));
  }, [form]);
  const [starts, setstarts] = useState(true);
  const [finddull, setfindull] = useState(false);
  const [maininfo, setmaininfo] = useState(false);
  const [pics, setpics] = useState(false);
  const [homebase, sethomebase] = useState(false);
  const [sharpening, setsharpening] = useState(false);
  const [delivery, setdelivery] = useState(false);
  const [zelle, setzelle] = useState(false);
  const [rating, setrating] = useState(false);
  const [process, setprocess] = useState(false);
  const [feedback, setfeedback] = useState(false);
  const [payout, setpayout] = useState(false);
  const [location, setlocation] = useState(false);
  const handlestarts = (e) => {
    e.preventDefault();
    setstarts(false);
    setfindull(true);
  };
  const handlestarts0 = (e) => {
    e.preventDefault();
    setstarts(true);
    setfindull(false);
  };
  const handlestarts1 = (e) => {
    e.preventDefault();
    setstarts(false);
    setfindull(true);
    setmaininfo(false);
  };
  const handlestarts2 = (e) => {
    e.preventDefault();
    setstarts(false);
    setfindull(false);
    setmaininfo(true);
    setpics(false);
  };
  const handlestarts4 = (e) => {
    e.preventDefault();
    setstarts(false);
    setfindull(false);
    setmaininfo(false);
    setpics(false);
    sethomebase(true);
    setlocation(false);
    setsharpening(false);
  };
  const handlestarts5 = (e) => {
    e.preventDefault();
    setstarts(false);
    setfindull(false);
    setmaininfo(false);
    setpics(false);
    setlocation(true);
    setsharpening(false);
  };
  const handlestarts6 = (e) => {
    e.preventDefault();
    setstarts(false);
    setfindull(false);
    setmaininfo(false);
    setpics(false);
    setlocation(false);
    setsharpening(true);
    setdelivery(false);
  };
  const handlestarts7 = (e) => {
    e.preventDefault();
    setstarts(false);
    setfindull(false);
    setmaininfo(false);
    setpics(false);
    setlocation(false);
    setsharpening(false);
    setdelivery(true);
    setzelle(false);
  };
  const handlestarts8 = (e) => {
    e.preventDefault();
    setstarts(false);
    setfindull(false);
    setmaininfo(false);
    setpics(false);
    setlocation(false);
    setsharpening(false);
    setdelivery(true);
    setrating(false);
  };
  const handlestarts9 = (e) => {
    e.preventDefault();
    setstarts(false);
    setfindull(false);
    setmaininfo(false);
    setpics(false);
    setlocation(false);
    setsharpening(false);
    setdelivery(false);
    setrating(true);
    setprocess(false);
  };
  const handlestarts10 = (e) => {
    e.preventDefault();
    setstarts(false);
    setfindull(false);
    setmaininfo(false);
    setpics(false);
    setlocation(false);
    setsharpening(false);
    setdelivery(false);
    setrating(false);
    setprocess(true);
    setfeedback(false);
  };
  const handlestarts3 = (e) => {
    e.preventDefault();
    setstarts(false);
    setfindull(false);
    setmaininfo(false);
    setpics(true);

    sethomebase(false);
  };

  const handlefinddull = (e) => {
    e.preventDefault();
    setfindull(false);
    setmaininfo(true);
  };
  const handlemaininfo = (e) => {
    e.preventDefault();
    setmaininfo(false);
    setpics(true);
  };
  const [driverName, setEmail] = useState("");
  const [driverTell, setTell] = useState("");
  useEffect(() => {
    setForm((prevForm) => ({
      ...prevForm,
      driverName: user?.result?.name,
      driverTell: user?.result?.tell,
    }));
  }, [driverName, driverTell]);
  const handlepics = (e) => {
    e.preventDefault();
    const updatedTourData = {
      ...form,
      driverName: user?.result?.name,
      driverTell: user?.result?.tell,
    };

    if (cameraAllowed === true) {
      console.log("updated data", form);
      // dispatch(createProject({ ...form, toast }));
      setpics(false);
      sethomebase(true);
    } else {
      setpics(true);
      sethomebase(false);
      alert("camera not allowed you have to allow the camera first");
    }
  };
  const handlehomebase = (e) => {
    e.preventDefault();
    sethomebase(false);
    setlocation(true);
  };
  const handlelocation = (e) => {
    e.preventDefault();
    setlocation(false);
    setsharpening(true);
    console.log("hello");
  };
  const handlesharpening = (e) => {
    e.preventDefault();
    setsharpening(false);
    setdelivery(true);
    console.log(invoice[0].phone);
  };
  const handledelivery = (e) => {
    e.preventDefault();
    setdelivery(false);
    setzelle(true);
  };
  const handlezelle = (e) => {
    e.preventDefault();
    setzelle(false);
    setrating(true);
  };
  const handlerating = (e) => {
    e.preventDefault();
    setrating(false);
    setprocess(true);
  };
  const handleprocess = (e) => {
    e.preventDefault();
    setprocess(false);
    setfeedback(true);
  };
  const handlefeedback = (e) => {
    e.preventDefault();
    setfeedback(false);
    setpayout(true);
  };

  const [clicked, setClicked] = useState(false);
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);
  const [clicked5, setClicked5] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleClick1 = () => {
    setClicked1(!clicked1);
  };

  const handleClick2 = () => {
    setClicked2(!clicked2);
  };

  const handleClick3 = () => {
    setClicked3(!clicked3);
  };

  const handleClick4 = () => {
    setClicked4(!clicked4);
  };
  const handleClick5 = () => {
    setClicked5(!clicked5);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showModal, setShowModal] = useState(false);

  const handleButtonClickModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCallButtonClick = () => {
    const phoneNumber = "8916806"; // Replace with your desired phone number
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
  };

  const handleTextButtonClick = () => {
    const phoneNumber = "8916806"; // Replace with your desired phone number
    const textUrl = `sms:${phoneNumber}`;
    window.open(textUrl, "_blank");
  };

  const originalDate = "2023-05-20T09:46:57.706+00:00";
  const formattedDate = moment(originalDate).format("D");

  const currentDate = moment().format("D");

  return (
    <div style={{}} className="orders">
      {starts && (
        <>
          {/* <App/> */}
          {/* {userOrders.length <= 3 ? ( */}
          <form onSubmit={handlestarts} className="start" id="forms">
            <h2 style={{ fontSize: "1.4rem" }}>
              Welcome
              {/* <p>Original date: {originalDate}</p> */}
              {/* <p>Formatted date: {currentDate - formattedDate}</p> */}
              DullDash
            </h2>
            {/* <App/> */}
            {/* {id} */}
            {/* {products.map((i) => {
       return <>{i.name}</>;
     })} */}
            <p style={{ fontSize: "1rem" }}>
              lets get you started on your journey {user?.result?.name}to
              becoming an expert dull hunter{" "}
            </p>
            <div style={{ marginTop: "120px" }}>
              <button className="filled" type="submit">
                I'm Ready!
              </button>
              <Link to='/dashboard'>
              <button className="unfilled">Later </button>

              </Link>
            </div>
          </form>
          {/* ) : ( */}
          {/* "" */}
          {/* )} */}
        </>
      )}

      {finddull && (
        <>
          {/* {userOrders.length <= 3 ? ( */}
          <form
            onSubmit={handlefinddull}
            action=""
            className="finddull"
            id="forms"
            style={{ color: "black" }}
          >
            <h2 style={{ fontSize: "1.4rem" }}>Lets hunt some dulls </h2>
            <p style={{ fontSize: "1rem" }}>
              The first step is to find a dull tool or blade!They can belong to
              you,your neighbour a friend even a stranger.Everyone has dulls!
            </p>
            <p style={{ textAlign: "center" }}>Here are some ideas</p>
            <p>
              <p
                style={{
                  fontWeight: "bolder",
                  textAlign: "center",
                  fontSize: "1.3rem",
                }}
              >
                Knives &nbsp; &nbsp; scissors &nbsp; &nbsp; Garden tools <br />{" "}
                Lawn mower blades &nbsp; & so many more
              </p>
            </p>
            <button
              style={{ width: "180px", fontSize: "1rem" }}
              className="filled"
            >
              I've found a dull
            </button>
            <button
              style={{ width: "180px", fontSize: "1rem" }}
              className="filled"
              onClick={handlestarts0}
            >
              back
            </button>
          </form>
          {/* ) : ( */}
          {/* "" */}
          {/* )} */}
        </>
      )}

      {maininfo && (
        <>
          <form
            onSubmit={handlemaininfo}
            action=""
            style={{ color: "black" }}
            className="maininfo"
            id="forms"
          >
            <h1>Dulls acquired!</h1>
            <p>
              Plaese collect teh following information from the customer (if you
              are using the own dull for this input your own information)
            </p>
            <div className="infocollection">
              <div className="infodiv">
                <input
                  required
                  onChange={(e) =>
                    setForm({ ...form, firstname: e.target.value })
                  }
                  type="text"
                  placeholder="First name"
                />
                <input
                  required
                  onChange={(e) =>
                    setForm({ ...form, lastname: e.target.value })
                  }
                  type="text"
                  placeholder="Last name"
                />
              </div>
              <div className="infodiv">
                <input
                  required
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  type="number"
                  placeholder="Phone number"
                />
                <input
                  required
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                  type="text"
                  placeholder="Adress"
                />
              </div>
            </div>
            <button className="filled">Next </button>
            <button
              style={{ width: "180px", fontSize: "1rem" }}
              className="filled"
              onClick={handlestarts1}
            >
              back
            </button>
          </form>
        </>
      )}

      {pics && (
        <>
          {" "}
          <form
            style={{ height: "29rem"
           }}
            onSubmit={handlepics}
            className="pics"
            id="forms"
          >
            <h1>Snap a pic</h1>

            <p>
              Please take a picture of the order.Be sure to get all of it in the
              frame!
            </p>
            <div    style={{ position:'relative',
 width:'100%',overflow:'hidden',aspectRatio:'16/9' }}>
              {picture == "" ? (
                <Webcam
                  audio={false}
                  height={200}
                  ref={webcamRef}
                  width={200}
                  screenshotFormat="image/jpeg"
                  videoConstraints={videoConstraints}
                />
              ) : (
                <img style={{
                  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
                }} src={picture} />
              )}
            </div>
            <div>
              {picture != "" ? (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setPicture();
                  }}
                  className="filled"
                >
                  Retake
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    capture();
                  }}
                  className="filled"
                >
                  Capture
                </button>
              )}
            </div>
            <button style={{ marginTop: "" }} className="filled">
              Next
            </button>
            <button
              onClick={handlestarts2}
              style={{ marginTop: "" }}
              className="filled"
            >
              Back
            </button>
          </form>
        </>
      )}

      {homebase && (
        <>
          {/* {userOrders.length <= 3 ? ( */}
          <form
            action=""
            onSubmit={handlehomebase}
            className="homebase"
            id="forms"
          >
            <h2>To home base</h2>
            <p>you're on roll!now lets bring the dulls to the home Base</p>
            <p>
              Even though they are dull,Sharp objects and tools,they should be
              well secured ,and placed so they will not hit the driver in the
              event of a crash
            </p>
            <button style={{ marginTop: "70px" }} className="filled">
              Next
            </button>
            <button
              onClick={handlestarts3}
              style={{ marginTop: "70px" }}
              className="filled"
            >
              Back
            </button>
          </form>
          {/* ) : ( */}
          {/* "" */}
          {/* )} */}
        </>
      )}

      {location && (
        <>
          <form
            action=""
            onSubmit={handlelocation}
            className="location"
            id="forms"
          >
            <h2>To home base</h2>
            <p>Homebase is located at</p>
            <div className="homebaselink">
              {invoice.map((i) => {
                return <a href="">{i.address} </a>;
              })}
            </div>
            <button style={{ marginTop: "70px" }} className="filled">
              Ive arrived!
            </button>
            <button
              onClick={handlestarts4}
              style={{ marginTop: "70px" }}
              className="filled"
            >
              Back
            </button>
          </form>
        </>
      )}

      {sharpening && (
        <>
          <form
            onSubmit={handlesharpening}
            action=""
            className="sharpening"
            id="forms"
          >
            {invoice.map((item) => {
              return (
                <>
                  {user?.result?._id === item.userId ? (
                    <>
                      {currentDate - moment(item.createdAt).format("D") <= 4 ||
                      currentDate - moment(item.createdAt).format("D") >=
                        -27 ? (
                        <>
                          <>
                            <Button
                              style={{ width: "12rem" }}
                              variant="primary"
                              onClick={handleShow}
                            >
                              Current Invoice
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                              <Modal.Header closeButton>
                                <Modal.Title>Current Invoice</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <h6>{item.name}</h6>
                                <h6>{item.phone}</h6>
                                <h6>{item.address}</h6>
                                <h6> Your Cut :$10</h6>
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  variant="secondary"
                                  onClick={handleClose}
                                >
                                  Close
                                </Button>
                                {/* <Button variant="primary" onClick={handleClose}> */}
                                {/* Save Changes */}
                                {/* </Button> */}
                              </Modal.Footer>
                            </Modal>
                          </>
                          {/* {moment(item.createdAt).format("D")} */}
                          {/* {currentDate} */}
                        </>
                      ) : (
                        ""
                      )}
                    </>
                  ) : (
                    ""
                  )}
                  <p></p>
                </>
              );
            })}

            <h1>Sharpenning in progress</h1>
            <p>
              Please wait while the order is sharpened.Depending on order
              volume,this may take some time
            </p>
            <p>
              You do not have to stay at home base while you wait.You will be
              notified when the order is ready to return to the customer
            </p>
            <button style={{ marginTop: "60px" }} className="filled">
              Next
            </button>
            <button
              onClick={handlestarts5}
              style={{ marginTop: "60px" }}
              className="filled"
            >
              Back
            </button>
          </form>
        </>
      )}

      {delivery && (
        <>
          <form
            onSubmit={handledelivery}
            action=""
            id="forms"
            className="delivery"
          >
            <h1>Return to customer</h1>
            <p>Now its time to take the tools back to the customer </p>
            <p>
              The tools are{" "}
              <span style={{ color: "#470e2d" }}>Exteremely sharp.</span>They
              are wrapped for your safety,but still should be well secured ,and
              placed so they will not hit the driver in the event of a crash
            </p>

            <p>As a reminder you picked up this tools from </p>
            <p>
              {" "}
              {invoice.map((i) => {
                return <a href="">{i.address} </a>;
              })}
            </p>
            <button onClick={handlestarts6} className="filled">
              Back
            </button>
            <button onClick={handleButtonClick} className="filled">
              Navigate
            </button>

            <button className="filled">Delivered!</button>
          </form>
        </>
      )}

      {zelle && (
        <>
          <form action="" id="forms" className="zelle">
            <h1>Its that easy</h1>
            <p>You have succesfully completed your interview Drive</p>
            <p>
              You will receive the payment for this order within 2 business days
              via zelle to the phone number you signed up within
            </p>
            <p>
              To start your next order simply press the new order button on the
              dashboard
            </p>
            <div style={{ marginTop: "30px" }}>
              <button onClick={handlestarts7} className="filled" type="submit">
                Back
              </button>
              <button onClick={handlezelle} className="filled" type="submit">
                Next!
              </button>

              <button
                onClick={handleButtonClickModal}
                style={{ width: "150px" }}
                className="unfilled"
              >
                {" "}
                I dont have Zelle!
              </button>

              <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Choose your altenantive</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <button onClick={handleCallButtonClick}>Call Number</button>
                  <button onClick={handleTextButtonClick}>Text Number</button>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </form>
        </>
      )}

      {rating && (
        <>
          <div action=""  className="rating" id="forms">
            <h1>Want to add onother $ ammount</h1>
            <p>Just take 30 seconds to give us some feedback! </p>
            <h5>How would you rate this delivery?</h5>
            <div className="item-startsss">
              <App />
            </div>

           
            <button onClick={handlerating} style={{ marginTop: "70px" }} className="filled">
              {" "}
              No thanks
            </button>
            <button
              onClick={handlestarts8}
              style={{ marginTop: "70px" }}
              className="filled"
            >
              {" "}
              Back
            </button>
            {products.map((i) => {
              return <>{i._id}</>;
            })}
          </div>
        </>
      )}

      {process && (
        <>
          <form
            action=""
            onSubmit={handleprocess}
            id="forms"
            className="process-sense"
          >
            <h1>Want to earn onother $ amount </h1>
            <p>Just take 30 seconds to give us some feedback! </p>
            <h5>Does the process make sense?</h5>
            <div style={{ marginTop: "40px" }}>
              <button
                style={{ float: "none" }}
                type="submit"
                className="filled"
                onClick={handlestarts9}
              >
                Back
              </button>
              <button
                style={{ float: "none" }}
                type="submit"
                className="filled"
              >
                Yes
              </button>
              <button
                style={{ float: "none" }}
                type="submit"
                className="filled"
              >
                No
              </button>
            </div>
          </form>
        </>
      )}

      {feedback && (
        <>
          <form
            action=""
            onSubmit={handlefeedback}
            id="forms"
            className="feedbackss"
          >
            <h1>Want to earn onother $ amount </h1>
            <p>Just take 30 second to give us some feedback</p>
            <h4>How can we improve</h4>
            <textarea
              id="feedback"
              name="feedback"
              rows="3"
              cols="25"
              placeholder="Feedback..."
            ></textarea>
            <div style={{display:"flex"}}>
            <button className="filled">Done</button>
<button onClick={handlestarts10} className="filled">
  Back
</button>
            </div>
            
            
            
            
          </form>
        </>
      )}

      {payout && (
        <>
          <form action="" id="forms" className="payout">
            <h1>Want to earn onother $ amount </h1>
            <p>Thank you</p>
            <p>An extra $ Amount has been added to your payout</p>
            <Link to="/dashboard">
              <button
                style={{ width: "150px", float: "none", marginTop: "100px" }}
                className="filled"
              >
                Back to dashboard
              </button>
            </Link>
          </form>
        </>
      )}
    </div>
  );
};

export default CustomerOrders;
