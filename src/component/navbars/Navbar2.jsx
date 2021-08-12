import React from 'react'
import "./Navbar2.css"
import Logo from "../imag/Logo.png"
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ErrorRoundedIcon from '@material-ui/icons/ErrorRounded';

const Navbar2 = () => {
    return (
        <>
         <div className="navbar2-main">
             <div className="navbar2-content">

             <div className="logo-main">
             <img src={Logo} className="logo" />
              </div> 

              <div className="navbar2-search-main">

              <div className="navbar2-search-content">
                  <SearchIcon className="navbar2-searchicon" style={{ color: 'White' }}   />
                  <ArrowDropDownIcon className="navbar2-searchDropDown" style={{ color: 'White' }}  />
                  </div>

              </div>

              <div className="navbar2-items-main">
                          <p className="navbar2-item-p">Jobs</p>
                          <p className="navbar2-item-p">Talent</p>
                          <p className="navbar2-item-p">Report</p>
                          <p className="navbar2-item-p">Message</p>
                  </div>
                  
                      
                      <div className="navbar2-righticons-main">
                      
                      <ion-icon name="help-sharp" className="navbar2-question-icon" style={{fontSize:25}} ></ion-icon>
                      <ion-icon name="notifications" className="navbar2-notification-icon" style={{fontSize:20}} ></ion-icon>
                      <div class="vl" ></div>
                      <ion-icon name="person-add" style={{fontSize:20}}></ion-icon>
                      <ion-icon name="person-circle" style={{fontSize:20}}></ion-icon>
                      </div>


                  
             </div>
         </div>  
        </>
    )
}

export default Navbar2
