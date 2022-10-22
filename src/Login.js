import axios from "axios";
import React, { useState } from "react";
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const cookies = new Cookies();
const [data, setData] = useState("")
const navigate = useNavigate()
const haveCookie = cookies.get('jwt')
console.log("have",haveCookie)
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email,
      password
    };
    axios
      .post(
        "https://hotels-rest-api-production.up.railway.app/users/signin",
        payload
      )
      .then((res) => {
        console.log("res", res.data);
        // setData(res.data.result.name)
        // cookies.set('jwt', res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogout = () =>{
    cookies.remove('jwt')
    navigate('/thankyou')
  }
  return (
    <>
      <h1>Login Form</h1>
      <form>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="button" onClick={handleSubmit}>
          Login
        </button>
      </form>

      {
        haveCookie && (
           <div>
           <h1>Hey, {data}</h1>
           <button onClick={handleLogout}>Logout</button>

           </div>
           )
      }
    </>
  );
};
export default Login;