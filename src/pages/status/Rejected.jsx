import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { deleteTodo, rejectUser } from "../../redux/features/todosSlice";
import {
  deleteTodo,
  getTodos1,
  rejectUser,
  updateTodo,
} from "../../redux/features/todosSlice";
const Pedding = () => {
  // const usersData = [
  //   {
  //     name: "john doe",
  //     email: "john@gmail.com",
  //     status: "rejected",
  //     tell: "7575198515",
  //   },
  // ];

  const [users, setUsers] = useState([]);
  function compare(a, b) {
    if (a._id < b._id) {
      return 1;
    }
    if (a._id > b._id) {
      return -1;
    }
    return 0;
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    alert('are you sure you want to permanently delete this user')
    dispatch(deleteTodo(id));
    navigate("/admin/rejected");
  };

  useEffect(() => {
  async function fetchData() {
  try {
  const res = await axios.get(`https://erytyu.onrender.com/stats/rejected`);

  res.data.sort(compare);
  const result = res.data.filter((_, index) => index < 30);
  setUsers(res.data);
  console.log('user',users);
  } catch (error) {
  console.log(error);
  }
  }
  fetchData();
  }, []);


  const [todo, setTodo] = useState({
    status: false,
    isComplete: false,
  });
  
  const todosState = useSelector((state) => state.todosState);
  const { todos } = todosState;
  const handleSubmit1 = (e) => {
    // e.preventDefault();
window.alert('are sure  you want to activate this user')
    if (todo._id) {
      dispatch(rejectUser(todo));
      navigate('/')
    }
    setTodo({
      isComplete: false,
      status:false
    });
  };


  return (
    <div className="pendng">
        
       
      
    <div className="tops">
      <h5>Name</h5>
      <h5>Contact</h5>
      <h5>Status</h5>
    </div>
    <div className="pending-line"></div>
    {todosState.getTodosStatus === "pending" ? "loading" : null}
    {/* <h2> You have {todos && todos.length} tasks </h2> */}
    {users.map((todo) => (
      <div className="pending-ite" key={todo._id}>
        <h6>{todo.name}</h6>

           <h6>
          {todo.email} {todo.tell}{" "}
        </h6>
                  <h6>{todo.status === true  ? "Rejected" : ""}</h6>

        
       
                  <button
   className="btn-admin"
   type="submit"
   onClick={() => handleDelete(todo._id)}
 >
   <h6 style={{}}>Remove a user</h6>
 </button>
 <form onSubmit={handleSubmit1} className="pending-btns">
{todosState.getTodosStatus === "pending" ? "loading" : null}
  <button
    className="btn-admin"
    type="submit"
    onClick={() => setTodo({ ...todo })}
  >
    <h6 style={{}}>Activate user</h6>
  </button>
  
</form>
          {/* <button className="btn-admin" > <h6>Send notification</h6> </button>{" "} */}

          <div className="line-sep"></div>


        
      </div>
    ))}
  </div>
  );
};

export default Pedding;








// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Table } from "react-bootstrap";
// import { Link, useParams } from "react-router-dom";
// import { updatestatus } from "../../components/apicalls";

// const Pedding = () => {
//   // const usersData = [
//   //   {
//   //     name: "john doe",
//   //     email: "john@gmail.com",
//   //     status: "pending",
//   //     tell: "7575198515",
//   //   },
//   // ];
// const {id}=useParams()
//   const [users, setUsers] = useState([]);
//   function compare(a, b) {
//     if (a._id < b._id) {
//       return 1;
//     }
//     if (a._id > b._id) {
//       return -1;
//     }
//     return 0;
//   }

//   useEffect(() => {
//   async function fetchData() {
//   try {
//   const res = await axios.get(`https://erytyu.onrender.com/stats/succes`);

//   res.data.sort(compare);
//   const result = res.data.filter((_, index) => index < 30);
//   setUsers(res.data);
//   console.log('user',users);
//   } catch (error) {
//   console.log(error);
//   }
//   }
//   fetchData();
//   }, []);

//   const updateUserStatus = async (id) => {
//     await fetch(`/users/${id}`, { method: 'PUT' });
//     fetchData();
//   };

//   return (
//     <>
//     <div className="pending">
//       <Table style={{width:'80%'}} striped bordered hover size="sm">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Contact</th>
//             <th style={{paddingLeft:'4rem'}}> User Status</th>
//           </tr>
//         </thead>
//         </Table>
      

                                               

//       <Table style={{width:'80%'}} striped bordered hover size="sm">
        
//         {users?.map((user) => {
//               return (
//                 <>
//         <tbody>
//           <tr style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'5rem'}}>
//             <div>

           
//           <Link style={{color:'black',listStyle:'none',textDecoration:'none',border:'none'}} to={`/user/${user._id}`}>
// <div  style={{display:'flex',justifyContent:'center',gap:'2rem'}}>
//                   <td style={{paddingLeft:'1rem'}} >{user.name}</td>
//                   <td style={{paddingLeft:'1rem'}}>
//                     {user.email} {user.tell}
//                   </td>
//                   <td style={{paddingLeft:'1rem'}}>{user.status===true && 'Active'}</td>
//                   </div>
//                   </Link>
//                   </div>
//                   <div>
//                   {user.status==='pending' &&
//                   (
//                     <button onClick={() => updateUserStatus(user._id)} className="btn-admin" style={{ paddingTop: ".5rem" ,marginLeft:'2rem' }}>send notification</button>

//                   )}
//                    {user.status==='pending' &&
//                   (
//                     <button onClick={()=>updateUserStatus(_id,'rejected')} className="btn-admin" style={{ paddingTop: ".5rem" ,marginLeft:'2rem' }}>send notification</button>

//                   )}
//                    {user.status===true &&
//                   (
//                     <button onClick={()=>updateUserStatus(_id,'blocked')} className="btn-admin" style={{ paddingTop: ".5rem" ,marginLeft:'0rem' }}>send notification</button>

//                   )}
//                    {user.status==='blocked' &&
//                   (
//                     <button onClick={()=>updateUserStatus(_id,'re-approve')} className="btn-admin" style={{ paddingTop: ".5rem" ,marginLeft:'2rem' }}>send notification</button>

//                   )}
//                  </div> 
              
//           </tr>
//         </tbody>
//         </>
//               );
//             })}
//       </Table>
      
      
//     </div>
//     </>
//   );
// };

// export default Pedding;
