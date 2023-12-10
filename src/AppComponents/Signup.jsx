import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SignUP() {
  const { register, handleSubmit, setValue, watch,reset } = useForm();
  const [isSignUpButtonDisabled, setSignUPButtonDisabled] = useState(true);
  useEffect(() => {
    // Run the validation logic whenever the watched values change
    handleInputChange();
  }, [watch('signupemail'), watch('signuppassword'), watch('signupconfirmpassword')]);

  const handleInputChange = () => {
    // Check if email, password, and confirm password fields are not empty
    let isFormValid =
      watch('signupemail') !== "" &&
      watch('signuppassword') !== "" &&
      watch('signupconfirmpassword') !== "";

    // Update the button's disabled state
    setSignUPButtonDisabled(!isFormValid);
  };

  const onSubmit = async (data) => {
    try {
      console.log("Submitting form with data:", data);
      const response = await axios.post("https://fakestoreapi.com/users", {
        username: data.signupemail, // use 'signupemail' instead of 'email'
        password: data.signuppassword,
      });
      if(response){
        setSignUPButtonDisabled(true)
        reset()
      }
      console.log("response", response.data);
      // Handle the response or perform any other necessary actions
    } catch (error) {
      console.error("error", error);
      // Handle errors, such as displaying an error message to the user
    }
  };

  return (
    <>
      <div className='common-background'>
        <div className='mt-3'><h5>Sign UP</h5></div>
        <div className='mt-4'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <h6 className='mt-2'>Email</h6>
              <input
                type="email"
                {...register('signupemail', { required: true })}
                className='input-style'
              />
            </label>
            <br />
            <label>
              <h6 className='mt-2'>Password</h6>
              <input
                type="text"
                className='input-style'
                {...register('signuppassword', { required: true })}
              />
            </label>
            <br />
            <label>
              <h6 className='mt-3'>Confirm Password</h6>
              <input
                type="text"
                className='input-style'
                {...register('signupconfirmpassword', { required: true })}
              />
            </label>
            <br />
            <br />
            <button type="submit" className='signup-button-style' disabled={isSignUpButtonDisabled} ><h5>Sign Up</h5></button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUP;
