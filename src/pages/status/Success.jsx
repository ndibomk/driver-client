import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

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

  useEffect(() => {
  async function fetchData() {
  try {
  const res = await axios.get(`https://erytyu.onrender.com/stats/succes`);

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

  return (
    <div className="pending" style={{height:'23rem'}}>
      <Table striped bordered hover size="sm" style={{width:'100%'}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th> User Status</th>
          </tr>
        </thead>

        
        {users?.map((user) => {
              return (
                <>
        <tbody>
          <tr>
            
                  <td>{user.name}</td>
                  <td>
                    {user.email} {user.tell}
                  </td>
                  <td>{user.status==true && 'Active'}</td>
                 
                    <button className="btn-admin" style={{ paddingTop: ".5rem" }}>send notification</button>{" "}
                 
              
          </tr>
        </tbody>
        </>
              );
            })}
      </Table>
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
