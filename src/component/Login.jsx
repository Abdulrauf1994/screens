import React from 'react'
import "./Login.css"
import LockIcon from '@material-ui/icons/Lock';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const Login = () => {
    return (
        <>
            <div className="Login-container">
                <div className="login-main">
                    
                    <h1 className= "login-mainheading">WELLCOME</h1>
                    
                    <div className="login-input-main">
                    <LockIcon className="login-lockicon" fontSize="small" />
                    <input placeholder="Password" className="login-input" />
                    </div>

                    <div className="loginkeep-main">

                    <div className="loginkeep-me">
                    <CheckBoxIcon className="loginkeep-icon" fontSize="small"/>
                    <h5 className="loginkeep-text">Keep me logged in</h5>
                    </div>

                    <div className="password-forget"></div>
                    <h5 className="forget-text">Forget Password</h5>
                    </div>
                    
                    <button className="loginbtn">Log in </button>
                    <p className="notyou">Not You?</p>
                </div>
            </div>
        </>
    )
}
export default Login;
