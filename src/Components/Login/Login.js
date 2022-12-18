import styles from "./Login.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Image/download.png";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
  from 'mdb-react-ui-kit';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const { data, status } = await axios.post("/api/login", {
        email,
        password,
      });
      if (status === 200) {
        window.location.href = "/dashboard";
        // alert(data.message);
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (

    <>
      
      <div style={{ margin: '6% 10% 10% 30% ',width:'40%',position:'fixed'}} >

        <MDBContainer className="my-5">

          <MDBCard>
            <MDBRow className='g-0'>


              <MDBCol md='6'>
                <MDBCardImage src='https://i.pinimg.com/236x/b8/33/69/b833697b7c5f1222e576ddba8f50c497.jpg' alt="login form" className='rounded-start w-100 h-100' />
              </MDBCol>


              {/* <MDBCol md='6'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
          </MDBCol> */}

              <MDBCol md='6'  >
                <MDBCardBody className='d-flex flex-column'>

                  <div className='d-flex flex-row mt-2'>
                    <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                    <img width="40" src={logo} alt="Digitius logo" title="Digitius"></img>
                    <span className="h1 fw-bold mb-0">Digitius</span>
                  </div>

                  <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1.5px' }}>Sign into your account</h5>

                  <MDBInput style={{ fontSize: '100%' }} onChange={(e) => setEmail(e.target.value)} name='email'  value={email}  wrapperClass='mb-4' placeholder="Enter your email" label='Email address' id='formControlLg' type='email' size="lg" />
                  <MDBInput style={{ fontSize: '100%' }} onChange={(e) => setPassword(e.target.value)} name="password" value={password} wrapperClass='mb-4' placeholder="Enter your password" label='Password' id='formControlLg' type='password' size="lg" />

                  <MDBBtn onClick={onSubmitHandler} className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
                  <div >
                    <a style={{ display: 'flex', justifyContent: 'center', fontSize: '100%' }} className="small text-muted" href="#!">Forgot password?</a>
                    <p style={{ display: 'flex', justifyContent: 'center', fontSize: '100%', color: '#393f81' }} className="mb-5 pb-lg-2">Don't have an account? <a href="#!" style={{ color: '#393f81' }}>Register here</a></p>

                    <div >
                      <a style={{ display: 'flex', justifyContent: 'center', fontSize: '100%' }} href="#!" className="small text-muted me-1">Terms of use.</a>
                      <a style={{ display: 'flex', justifyContent: 'center', fontSize: '100%' }} href="#!" className="small text-muted">Privacy policy</a>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCol>

            </MDBRow>
          </MDBCard>

        </MDBContainer>
      </div>
    </>


  );
};

export default Login;
