
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import axios from 'axios';

function MYAccount() {
  const { register, handleSubmit, setValue, watch, reset } = useForm();
  const [isButtonDisabled, setButtonDisabled] = useState(true);


  const handleInputChange = () => {
    let isFormValid =
      watch('email') !== '' &&
      watch('currentpassword') !== '' &&
      watch('newpassword') !== '' &&
      watch('createpassword') !== '';

    // Update the button's disabled state
    setButtonDisabled(!isFormValid);
    console.log("this is working");

  };


  const onSubmit = (data) => {
    // axios.put('https://fakestoreapi.com/users/7', data)
    // .then(response => {
    //   console.log('Password updated successfully:', response.data);
    // })
    // .catch(error => {
    //   console.error('Error updating password:', error);
    // });
    reset();
    setButtonDisabled(true)
  };


  return (
    <>
      <div className="myaccount-style d-flex">
        <div className='form-style '>
          <h5 className='pt-5 ms-5'>Update Password</h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <h6 className='mt-4 content-email-form-style'>Email</h6>
              <input
                type="email"
                {...register('email', { required: true })}
                className='input-style email-input-style'
                value={"abcexample@gmail.com"}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              <h6 className='mt-4 content-form-style'>Current Password</h6>
              <input
                type="text"
                className='input-style'
                {...register('currentpassword', { required: true })}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              <h6 className='content-form-style mt-4'>New Password</h6>
              <input
                type="text"
                className='input-style'
                {...register('newpassword', { required: true })}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              <h6 className='mt-4 content-form-style'>Confirm Password</h6>
              <input
                type="text"
                className='input-style'
                {...register('confirmpassword', { required: true })}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <div style={{'marginLeft':'3rem'}}>
            <button type="submit" className='button-style' disabled={isButtonDisabled} ><h6>Update Password</h6></button>
            </div>
          </form>
        </div>
      </div >
    </>
  )

}

export default MYAccount