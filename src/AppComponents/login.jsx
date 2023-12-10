import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Model } from 'rsuite'
import Cart from "./Cart"
import SignUP from './Signup';
function Login() {

  const { register, handleSubmit, setValue, watch } = useForm();
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [change, setChange] = useState(true)
  const [cartChange, setCartChange] = useState(false)
  const [signupchange, setsignupchange] = useState()
  var response = ""

  const handleInputChange = () => {
    // Check if email, password, and confirm password fields are not empty
    let isFormValid =
      watch('email') !== '' &&
      watch('password') !== '' &&
      watch('confirmpassword') !== '';

    // Update the button's disabled state
    setButtonDisabled(!isFormValid);
  };


  const onSubmit = async (data) => {
    try {
      console.log("Submitting form with data:", data);
      response = await axios.post("https://fakestoreapi.com/auth/login", {
        username: data.email,
        password: data.password,
      });
      console.log("response", response.data);
      if (response === "true") {
        alert("your login is successful")
        setChange(false)
        setCartChange(true)
      }
      else {
        alert("your email is not registered")
        setsignupchange(true)
        setChange(false)
        setCartChange(false)
      }
    } catch (error) {
      console.error("error", error);
      setsignupchange(false)
      setChange(false)
      setCartChange(true)
    }
  };
  return (
    <>
      {
        change && (
          <div className='login-background' >
            <div className='mt-3 text-bolder'><h5>Login</h5></div>
            <div className='mt-4'>

              <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                  <h6 className='mt-2'>Email</h6>
                  <input
                    type="email"
                    {...register('email', { required: true })}
                    className='input-style'
                    onChange={handleInputChange}
                  />
                </label>
                <br />
                <label>
                  <h6 className='mt-2'>Password</h6>
                  <input
                    type="text"
                    className='input-style'
                    {...register('password', { required: true })}
                    onChange={handleInputChange}
                  />
                </label>
                <br />
                <br />
                <br />
                <button type="submit" className= {`button-style ${!isButtonDisabled ? "" : "open"}`} disabled="false">Submit</button>
              </form>
            </div>
          </div>
        )
      }

      {
        signupchange && (
          <SignUP></SignUP>

        )
      }
      {
        cartChange && (
          <Cart></Cart>
        )
      }
    </>
  )
}

export default Login