


import { useState } from "react";
import axios from "axios";
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
const Login=()=>{
    const[loginform,setLoginform]=useState({
        
        'username':'',
        'password':''
        
    })
    
    const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/addlogin', { loginform })
      .then((res) => {
        if (res.status === 200) {
          alert('Login success');
          console.log(res.data.username);
          localStorage.setItem('userdata_username', res.data.username);
          navigate('/');
        }
      })
      .catch((error) => {
        console.error('Login error:', error);
      });
  };
    // let backend_api="https://localhost:5000/adduser"
    return(
       <center>
        <div className='login-container'>
        <h1 className="login-header">Login</h1>
            <form onSubmit={handlesubmit} >
                
            

                {/* <br/><br/><br/> */}
                <div className="form-section">
                <div className="input-box">
                <label id="aa" className="login-label" htmlFor="username"> UserName:</label>
                <input type="username" name="username" onChange={(e)=>setLoginform({...loginform,username:e.target.value})}  className="login-input"/>
                </div>
                </div>
                <div className="form-section">
                <div className="input-box">
                <lable id="aa" className="login-label" htmlFor="username">Password:</lable>
                <input type="password" name="password" onChange={(e)=>setLoginform({...loginform,password:e.target.value})}  className="login-input"/>
                </div>
                </div>
                <div className="my-3">
                                 <p>New Here <Link to="/registerform" className="text-decoration-underline text-info">signup</Link> </p>                      </div>
                
                <input type="submit" value="Login" className="submit-button" />

            </form>
        </div>
        </center>
        
    )
}
export default Login;