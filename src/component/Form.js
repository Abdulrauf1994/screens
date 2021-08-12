import React from 'react'

// import Apple from '@material-ui/icons/Apple';
function Form() {
    return (
        <>
        <div className="signup-container">
        <div className="form">
        <div className="form-content">
        <h2>LOG INTO NOVEART</h2>
        
        <div className="main-input">
        <i class="zmdi zmdi-account"></i>
        <input className= "input" placeholder="Username Or Email" />
        </div>

        <button className="email-btn">Continue With Email</button>

        <line>__________OR__________</line>

        <div className="google-main">
        <button className="google-btn"><i class="zmdi zmdi-google"></i>Continue With Google</button>
        </div> 

        <div className="apple-main">
        <button className="apple-btn"><i class="zmdi zmdi-apple"></i>Continue With Apple</button>
        </div>
        <line>______________________</line>
        <h5>__Don't Have a Noveart Account?__</h5>
        <div className="signup">
            <button className="signup-btn">Sign UP</button>
        </div>

        </div>
        
        </div>

        </div>
        </>
    )
}

export default Form;
