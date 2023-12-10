import React, { useEffect, useState } from "react";
// import Links from "./AppComponents/Links";
import './App.css'
import { Link, NavLink, NavLinkLink, Outlet } from "react-router-dom";
// import MainComponents from "./MainComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faSquare, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "rsuite";

function Header() {
       const toggleNav = () => {
              setIsNavOpen(!isNavOpen);
       };
       useEffect(() => {
              setIsNavOpen(false)

       }, [])
       const handleNavOpen = () => {
              setIsNavOpen(false)
              console.log("this is working");
       }

       const [isNavOpen, setIsNavOpen] = useState(false);
       return (
              <>
                     {/* <div className="checkGrid">
                            <div className="header"> */}
                     {/* <div className="header-style-main"> */}
                     <div className="d-flex">
                            {/* <div className="dots-content "> */}
                            {/* <div className="dots-div-main"> */}
                            {/* <div className="dots-div"> */}
                            {/* <div className="dots-main">
                                   <div>
                                          <FontAwesomeIcon icon={faSquare} className="dots"></FontAwesomeIcon>
                                          <FontAwesomeIcon icon={faSquare} className="dots"></FontAwesomeIcon>
                                   </div>

                                   <div>
                                          <FontAwesomeIcon icon={faSquare} className="dots"></FontAwesomeIcon>
                                          <FontAwesomeIcon icon={faSquare} className="dots"></FontAwesomeIcon>
                                   </div>

                            </div> */}
                            {/* <div className="logo">
                                   <div className="dots-main-style">
                                          <div>.</div>
                                          <div>.</div>
                                          <div>.</div>
                                          <div>.</div>

                                   </div>

                            </div> */}
                            <div class="logo"><div class="dots-main-style"><div class="first-dot">■</div><div>■</div><div>■</div><div>■</div></div></div>
                            <div className="brand-name">
                                   SHOP HUB
                            </div>
                     </div>
                     <nav>
                            <div>
                                   <button className="nav-button" onClick={toggleNav}>
                                          <FontAwesomeIcon icon={faBars} />
                                   </button>
                            </div>
                            <div className={`header-links ${isNavOpen ? "open" : ""}`}>
                                   {isNavOpen && (
                                          <div className="fatimeStyle">
                                                 <FontAwesomeIcon icon={faTimes} onClick={() => handleNavOpen()} />
                                          </div>
                                   )}
                                   <Link to="/" className="nav-links" onClick={() => setIsNavOpen(false)}>
                                          Home
                                   </Link>
                                   <Link to="/Shop" className="nav-links" onClick={() => setIsNavOpen(false)}>
                                          Shop
                                   </Link>
                                   <Link to="/blog" className="nav-links" onClick={() => setIsNavOpen(false)}>
                                          Blog
                                   </Link>
                                   <Link to="/contact" className="nav-links" onClick={() => setIsNavOpen(false)}>
                                          Contact
                                   </Link>
                                   <Link to="/login" className="nav-links" onClick={() => setIsNavOpen(false)}>
                                          Login
                                   </Link>
                                   <Link to="/SignUP" className="nav-links" onClick={() => setIsNavOpen(false)}>
                                          SignUP
                                   </Link>
                                   <Link to="/Myaccount" className="nav-links" onClick={() => setIsNavOpen(false)}>
                                          My account
                                   </Link>
                            </div>
                     </nav>


                     <div className="bag">
                            <Link to="/cart">
                                   <FontAwesomeIcon icon={faShoppingBag} size="sm" />
                            </Link>
                     </div>
              </>
       )


}

export default Header

// <div>  
// <span className="ps-4 mt-5 link-elements">SHOP HUB</span>
// </div>
// <div> <span className="links-content">
// <Link to="/" className="px-3 link-elements">Home</Link>
// <Link to="/Shop" className="px-3 link-elements">Shop</Link>
// <Link to="/blog" className="px-3 link-elements">Blog</Link>
// <Link to="/contact" className="px-3 link-elements">Contact</Link>
// <Link to="/login" className="px-3 link-elements">Login</Link>
// <Link to="/SignUP" className="px-3 link-elements">SignUP</Link>
// <Link to="/Myaccount" className="px-3 link-elements">My account</Link>
// </span></div>
// <div> <span className=" circle-bag">
// <Link to="/cart" className=""> <FontAwesomeIcon icon={faShoppingBag}  size="lg" style={{"color":"black"}}/></Link></span>
// <div></div>
// </div>
{/* <div className=""> */ }
{/* <div class="logo"><div class="dots"><div class="first-dot">■</div><div>■</div><div>■</div><div>■</div></div></div> */ }
{/* <div>  
       <span className="ps-4 mt-5 link-elements">SHOP HUB</span>
       <span className="link-elements">SHOP HUB</span>
</div>
<div className="header-links"> 
       <Link to="/" >Home</Link>
       <Link to="/Shop" >Shop</Link>
       <Link to="/blog" >Blog</Link>
       <Link to="/contact" >Contact</Link>
       <Link to="/login">Login</Link>
       <Link to="/SignUP" >SignUP</Link>
       <Link to="/Myaccount" >My account</Link>
</div>
<div> <span >
       <Link to="/cart" className=""> <FontAwesomeIcon icon={faShoppingBag}  size="lg" style={{"color":"black"}}/></Link></span>
       <div></div>
</div> */}
{/* </div> */ }


{/* <div className="links-style">
                                          <NavLink to="/" >Home</NavLink>
                                          <NavLink to="/shop" >Shop</NavLink>
                                          <NavLink to="/blog" >Blog</NavLink>
                                          <NavLink to="/contact" >Contact</NavLink>
                                          <NavLink to="/login" >Login</NavLink>
                                          <NavLink to="/signup" >SignUP</NavLink>
                                          <NavLink to="/myaccount" >My account</NavLink>
                                   </div> */}