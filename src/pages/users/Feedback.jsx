import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";

const Feedback = () => {
  function compare(a, b) {
    if (a._id < b._id) {
      return 1;
    }
    if (a._id > b._id) {
      return -1;
    }
    return 0;
  }

  const [products, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`https://erytyu.onrender.com/users/${id}`);
res.data.sort(compare)
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  const [user, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://erytyu.onrender.com/products/${id}`
        );

        setUsers(res.data);
        // console.log("datauuuuu", res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div style={{ background: "whitesmoke" }}>
      {/* {user.map((i) => { */}
       
          <>
            <h2 style={{ textAlign: "center" }}> Recent  Feedbacks</h2>

            <div className="feedback">
              <div className="feedback-items">
                <h4>
                  {products.name} - {products.tell} {products.createdAt}
                </h4>

                <h6>Delivery rating </h6>
                <h3>{user.task == "" && <> No reviews </>}</h3>

                <h3>
                  {user.task == 1 && (
                    <>
                      {" "}
                      <AiFillStar />{" "}
                    </>
                  )}
                </h3>

                <h3>
                  {user.task == 2 && (
                    <>
                      {" "}
                      <AiFillStar /> <AiFillStar />{" "}
                    </>
                  )}
                </h3>
                <h3>
                  {user.task == 3 && (
                    <>
                      {" "}
                      <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                    </>
                  )}
                </h3>
                <h3>
                  {user.task == 4 && (
                    <>
                      {" "}
                      <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                      <AiFillStar />{" "}
                    </>
                  )}
                </h3>
                <h3>
                  {user.task == 5 && (
                    <>
                      {" "}
                      <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                      <AiFillStar /> <AiFillStar />{" "}
                    </>
                  )}
                </h3>

                <h6>Did the process make sense ? {"(Yes)"}</h6>
                <h6>Comments : hello</h6>
              </div>
            </div>
          </>
        );
      {/* })} */}
    </div>
  );
};

export default Feedback;
