import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Resgitration.css';

const RegisterForm=()=>{
    const[registerforms,setRegisterforms]=useState({
        'username':'',
        'email':'',
        'password':'',
        // 'location':''
        
        
    })
    // const handlesubmit=(e)=>{
    //     e.preventDefault();
        
    //     if (registerforms.username === '' || registerforms.email === '' || registerforms.password === '') {
    //         alert('Please fill');
    //       } else {
    //         // Handle form submission or further actions here
    //         alert('Thank you for register ');
    //       }
    //     console.log(registerforms)
    //     axios.post('http://localhost:9000/adduser',{registerforms})
    //     .then((res)=>
    //     // console.log(res.data))
    //     alert("success"))
    //     window.location.href='/'
    // }
    const handlesubmit = (e) => {
        e.preventDefault();
      
        if (registerforms.username === '' || registerforms.email === '' || registerforms.password === '') {
          alert('Please fill');
        } else {
          // Send a request to the server to check if the user already exists
          axios
            .post('http://localhost:5000/checkUser', {registerforms}) // Adjust the server endpoint
            .then((res) => {
              if (res.data.exists) {
                // User already exists, display an alert
                alert('User with the same email or username already exists.');
              } else {
                // User doesn't exist, proceed with registration
                axios.post('http://localhost:5000/adduser', { registerforms })
                  .then((res) => {
                    if(res.status === 500) {
                      alert('Thank you for registering.');
                    window.location.href = '/';
                    }
                    alert('Thank you for registering.');
                    window.location.href = '/login';
                  })
                  .catch((error) => {
                    // Handle registration error
                    console.error('Registration failed:', error);
                  });
              }
            })
            .catch((error) => {
              // Handle server error
              console.error('Server error:', error);
            });
        }
      };
      
    // let backend_api="https://localhost:5000/adduser"
    return(
       <center>
         <div className='register-container'>
        <h1 className="register-header">Register Page</h1>
            <form onSubmit={handlesubmit} >
                
                <div className="form-section">
                <div className="input-box">
                <label className="register-label" htmlFor="username"> username:</label>
                <input type="text" name="username" onChange={(e)=>setRegisterforms({...registerforms,username:e.target.value})} className="register-input"/>
                </div>
                </div>
                <div className="form-section">
                <div className="input-box">
                <label className="register-label" htmlFor="username"> Gmail:</label>
                <input type="email" name="email" onChange={(e)=>setRegisterforms({...registerforms,email:e.target.value})} className="register-input"/>
                </div>
                </div>
                <div className="form-section">
                <div className="input-box">
                <lable className="register-label" htmlFor="username">password:</lable>
                <input type="password" name="password" onChange={(e)=>setRegisterforms({...registerforms,password:e.target.value})} className="register-input"/>
                </div>
                </div>
                <br/><br/><br/>
                {/* <label> location:</label>
                <input type="text" name="username" onChange={(e)=>setRegisterforms({...registerforms,location:e.target.value})}/>
                <br/><br/><br/> */}
                {/* <label> date</label>
                <input type="number" name="date" onChange={(e)=>setRegisterforms({...registerforms,date:e.target.value})}/>
                <br/>
                 */}
                 <div className="my-3">
                                 <p>Already have an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>                             </div>
                <input type="submit" value="submit" className="submit-button"/>

            </form>
        </div>
        </center>
        
    )
}
export default RegisterForm