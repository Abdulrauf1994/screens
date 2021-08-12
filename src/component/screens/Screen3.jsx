import React from "react";
import "./Screen3.css";

const Screen3 = () => {
  return (
    <>
      
      <div className="screen3-container">
        <div className="screen3-content">

          <div className="screen3-alertbox-main">
          <div className="screen3-alertbox-content">

          <div className="screen3-alertbox-icontext">
              <ion-icon className="alert-icon" name="alert-circle" style={{fontSize:30 , color: "#1dc948"}} ></ion-icon>
              <p  className="screen3-alertbox-text"> All  freelancer are required to complete a <span style={{ color: "#1dc948"}}>Wg</span> or a <span style={{ color: "#1dc948"}}> 
              W-8BEN</span> from to withdraw money.<span style={{ color: "#1dc948"}}> Learn More</span>
              </p>
              </div>

              <div className="crossicon-main">
              <ion-icon name="close" size="large" className="cross-icon" style={{color:"#b3b3b3"}} ></ion-icon>
              </div>

          </div>
          </div>

          <div className="screen3-earning-box-main">
          <div className="screen3-earning-box-content">
              <h1 className="screen3-Myjobs">My Jobs</h1>
              <h2 className="screen3-earning-font">Earning available now : $0:00 </h2>
          </div>
          </div>

          <div className="screen3-contract-main">
              <div className="screen3-cotract-content">
              <div className="screen3-contract-heading">
                  <h1>Active Contract</h1>
                  </div>
                  <div className="screen3-contract-text">
                  <p>Contract your actively working will appear here. Start searching for new projects now!</p>
                  </div>
              </div>
          </div>

         

        </div>
      </div>
    </>
  );
};

export default Screen3;
