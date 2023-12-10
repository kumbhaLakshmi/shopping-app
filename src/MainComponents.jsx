import React from "react"
import { useEffect, useState } from "react"
import Home from "./AppComponents/Main";
// import { json } from "react-router-dom"
import Products from "./AppComponents/Products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';

function MainComponents() {

  // const [pageDetails,setPageDetails]=useState()
  const [change, setChange] = useState(true)
  const currentUrl = window.location.href;
  const increment = () => ({ type: 'INCREMENT' });
  const decrement = () => ({ type: 'DECREMENT' });
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUrl === "http://localhost:3000/") {
      setChange(true)
    }
    else {
      setChange(false)
    }
  })

  return (
    <>
      {/* <main> */}
      <div className="product-main ">
        {/* <div> */}
        <div className="d-flex justify-items-center ps-5 pe-5 pt-4">
          {
            change ? (
              <div>
                <span style={{ "color": "white" }}>Home</span>
                <span className="mx-1" style={{ 'color': "black" }}>/</span>
                <span style={{ "color": "black" }}>Shop</span>
              </div>
            ) : <div>
              <span style={{ "color": "white" }}>Home</span>
              <span className="mx-1" style={{ 'color': "black" }}>/</span>
              <span style={{ "color": "black" }}>Product   Details</span>
            </div>
          }
          <div style={{ 'font': 'bold' }}>
            {
              change ? (
                <div className="main-shop-style">Shop</div>
              ) : <div className="main-shop-style">Product Details</div>
            }
          </div>

          {
            change ? (
              <div className="mt-1" >
                <div style={{ "color": "black", "fontSize": "15px" }}>Showing results 16-20</div>
                <select style={{ 'borderRadius': '3rem' }} className="mt-1" >
                  <option>
                    Default sorting
                  </option>
                  <option>
                    Lastest
                  </option>
                  <option>
                    Descending
                  </option>
                  <option>
                    Ascending
                  </option>
                </select>
              </div>
            ) : <div className="d-flex">
              <div className="circle mx-1">
                <FontAwesomeIcon icon={faChevronLeft} onClick={() => dispatch(decrement())} />
              </div>
              <div className="circle mx-1">
                <FontAwesomeIcon icon={faChevronRight}
                  onClick={() => dispatch(increment())}
                // onClick={()=>handleIncrement()}
                />
              </div>
            </div>
          }

        </div>
      </div>
      {/* </main> */}
    </>

  );
}

export default MainComponents