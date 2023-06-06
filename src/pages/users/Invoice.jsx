import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { invoiceAdd } from "../../redux/features/invoiceSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Invoice = () => {
  const { id } = useParams();
  const { user } = useSelector((state) => ({ ...state.auth }));
  const userId = user?.result?._id;
  const dispatch = useDispatch();
const [show,setShow]=useState(true)
  // const [products, setProduct] = useState([]);
  // const { id } = useParams();
  // useEffect(() => {
  //   async function fetchData() {
  // try {
  //   const res = await axios.get(`https://erytyu.onrender.com/users/${id}`);
  //   setProduct(res.data);
  // } catch (error) {
  //   console.log(error);
  // }
  //   }
  //   fetchData();
  // }, []);

  const [cut, setCut] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://erytyu.onrender.com/products/userTours/${userId}`
        );
        setCut(res.data);
        console.log("datauuuuu", res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const [users, setUsers] = useState([]);
  const [address, setAddress] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://erytyu.onrender.com/products/${id}`
        );
        setUsers(res.data);
        // setAddress(res.data.address);
        // console.log("invoice", res.data.name);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
     
useEffect(()=>{
  async function fetchData(){
    try {
      const res = await axios.get(
        `https://erytyu.onrender.com/users`
      );
      // setUsers(res.data);
      setAddress(res.data);
      // console.log("user", res.data);
    } catch (error) {
      console.log(error);

    }
  }
  fetchData();

})



  const [form, setForm] = useState(users);
  // console.log("form", form);
  // useEffect(() => {
  const set = () => {
    setForm((prevForm) => ({
      ...prevForm,
      
      name:users.name,
       address:users.address,
      phone: users.phone,
      id: users._id,
      userId: users.creator,
      //   cut:cut.length
    }));
    toast.success(`invoces send successfuly for ${ users.name}`)
    setShow(false)
  };

  // useEffect(() => {

  //   set();
  // }, []);

  // }, [])
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(invoiceAdd({ ...form, toast }));

    console.log("form", form);
  };

  return (
    <div className="main-invo" style={{ color: "white" }}>
      {/* {form.customer} */}

      {/* {users.name} */}
      
      {/* {form.cut} */}

{address?.map((user)=>{
return(
  <>
  {user._id===users.creator ?(
   
    <div className="invoice-data-items">
       {show ? (
        <>
            <h2 style={{textAlign:'center'}}>Invoice</h2>

    <p>Driver Name :  { user.name}</p>
    <p>Driver phone  :  { user.tell}</p>
    <p>Customer name  :  { users.name}</p>
    <p>Customer phone  :  { users.phone}</p>
    <p>Customer address  :  { users.address}</p>
    
    <form onSubmit={handleSubmit} action="">
        {/* <Link to={`/invoice/${user._id}`}> */}
        <button onClick={set} className="btn-invoice">Send invoice</button>
        {/* </Link> */}
      </form>
      </>
      ):''}
    </div>
  
  ):''}
  </>
)
})}





    </div>
  );
};

export default Invoice;
