import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  createRoutesFromElements,
  Route,
  Outlet

} from "react-router-dom";
import App from "./App";
import Contact from "./AppComponents/Contact";
import Shop from "./AppComponents/Shop";
import Blog from "./AppComponents/Blog";
import Login from "./AppComponents/login";
import SignUP from "./AppComponents/Signup";
import MYAccount from "./AppComponents/MyAccount";
import Home from "./AppComponents/Home";
import Header from "./Header";
import Cart from "./AppComponents/Cart";
// import App from "./App";

// const Router = () => {
//   return (
//     <>
//       <BrowserRouter>
//       {/* <App /> */}
//         <Routes>
//           <Route path="/" element={<App />}>
//             <Route index element={<Home />} />
//             <Route path="/shop" element={<Shop />} />
//             <Route path="/blogs" element={<Blog />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<SignUP />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       // {
//       //   path: '/',
//       //   element: <Home />
//       // },
//       {
//         path: "/Shop",
//         element: <Shop />,
//       },
//       {
//         path: "/blog",
//         element: <Contact />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/signup",
//         element: <SignUP />,
//       },
//       {
//         path: "/myaccount",
//         element: <MYAccount />,
//       },
//     ],
//   },
// ]);

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      {/* ... etc. */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/shop/:productId" element={<Shop />} />
      <Route path="/signup" element={<SignUP />} />
      <Route path="/myaccount" element={<MYAccount />} />
      <Route path="/cart" element={<Cart/>}/>
    </Route>
  )
);




{/* <div>
                            <Link to="/">Home</Link>
                            <Link to="/Shop">Shop</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/SignUP">SignUP</Link>
                            <Link to="/Myaccount">My account</Link>
                     </div> */}




export default Router