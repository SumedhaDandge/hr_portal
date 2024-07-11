import "../styles/login.css";
import loginDesign from "../assets/login_design.png";
import logo from "../assets/vitric_business_solutions_logo-removebg-preview 1.png";
import { useState } from "react";


const Login = () => {

  const [passwordType, setPasswordType] = useState("password");

  const handleToggle = () => {
    if (passwordType === "password") {
  
      setPasswordType("text");
    } else {
     
      setPasswordType("password");
    }
  };

  return (
    <>
      <div className="outer-container h-screen w-screen">
        <div className="column-container left">
          <div className="left-box">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="column-container right">
          <div className="right-box">
            <div className="login-design">
              <img src={loginDesign} />
            </div>
            <div className="login-form">
              
              <div class="login-container">
              <h1 className="login-heading">Sign In</h1>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <a href="#" className="forgotPass-link">Forgot Password</a>
              </div>
             
              {/* <form>
                <h2 className="login-heading">Sign In</h2>
                <Box
                  component="form"
                  sx={{
                    // '& > :not(style)': { m: 1, width: '25ch' },
                    width: 500,
                    maxWidth: "100%",
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'var(--white)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'var(--purple)',
                        },
                        '&.Mui-focused fieldset': {
                        //   borderColor: 'white',
                        //   background: 'var(--white)',
                          color: 'grey',
                          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
                        },
                      },
                  }}
                  autoComplete="off"
                >
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Email:"
                    variant="outlined"
                    type="email"
                    value= "email"                    
                    required
                  />

                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    type="password"
                    value="password"                   
                    required
                  />
                  <span>hide/show</span>
                </Box>
                
              </form> */}
              <button className="red-btn login-btn">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
