import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useParams, useHistory } from "react-router-dom";



const initialState = {

  credentials: {



    username: 'Lambda School',
    password: 'i<3Lambd4'

  }

}


const Login = () => {

  const [login, setLogin] = useState(initialState)

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const { push } = useHistory();

  const auth = e => {

    e.preventDefault();

    axiosWithAuth()
      .post("/api/login", initialState.credentials)
      .then(res => {
        // res.data.payload
        console.log(res.data)
        localStorage.setItem("token", res.data.payload);
        push("/bubblepage");
      })
      .catch(err => console.log(err));
  };


  const changeHandler = e => {

    let value = e.target.value;


    setLogin({
      ...login,
      [e.target.name]: value
    });
  };



  return (
    <>
      <h2>Please Log In to Continue</h2>

      <div>

        <form onSubmit={auth}>
          <label > Username: &nbsp;
            <input
              type="text"
              name="username"
              placeholder='Username'
              value={initialState.credentials.username}
              onChange={changeHandler}
            />
          </label>

          <label > Password: &nbsp;
          <input
              type="password"
              name="password"
              placeholder='Password'
              value={initialState.credentials.password}
              onChange={changeHandler}
            />
          </label>
          <button className='login-btn'>Log In</button>
        </form>
      </div>

    </>
  );
};

export default Login;
