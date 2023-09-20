import React from 'react';
import './Signup.css';
import img1 from '../../Img/Signup_page_image.png'

const Signup = () => {
  return (
    <div className="Signup_Page">
        <div className="signup_Continer">
          <div className="header_sign">
            <p>SIGNUP FORM</p>
          </div>
          <div className="header_description">
            <p className="line_1">
              It's Quick & Easy
            </p>
            <p className="line_2">
              Enter your cradentiols Details to cereate a new account
            </p>
          </div>
          <form action="#">
              <div className="input_field">
              <label htmlFor="name" className='lable'>First Name</label>
                <input type="text" name="name" id="name" placeholder='Enter your name'  className='name text_box' required/>
              </div>
              <div className="input_field">
              <label htmlFor="Email" className='lable'>Email address</label>
                <input type="email" name="E-mail" id="Email" placeholder='Enter your email' className='email text_box'/>
              </div>
              <div className="input_field password">
                <label htmlFor="password" className='lable'>Password</label>
                <input type="password" name="password" id="password" placeholder='Enter your password' className='email text_box'/>
                
              </div>
              <i class='bx bx-low-vision eye'></i>
              <div className="checkbox">
                <input type="checkbox" name="checkbox" id="checkbox"  className='checkbox box' /> <label htmlFor="checkbox" className='Checkbox_1'>I accept the <a href="#">Terms of use <span>&</span> Privacy Policy</a></label>
              </div>
              <button type='submit' className='signup_buuton'>SIGN UP</button>
              
          </form>
          <div className="line_break"></div>
          <div className="account_signup">
            <div className="google_signup">
              <a href="#" className='google_signup'>
                <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" className='google_img'/><span>Sign In with Google</span>
              </a>
            </div>
            <div className="apple_signup">
              <a href="#" className='apple_signup'>
              <i class='bx bxl-apple apple'></i><span>Sign In with Apple</span>
              </a>
            </div>
          </div>
          <div className="login_page">
            <p className="login_page_1">
              I already have a account! <a href="#">Login</a>
            </p>
          </div>
        </div>
        <div className="Signup_page_img">
            <img src={img1} alt="" className='Signup_img'/>
        </div>
    </div>
  )
}

export default Signup