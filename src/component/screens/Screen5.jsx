import React from 'react'
import './Screen5.css'
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';

const Screen5 = () => {
    return (
        <>
         <div className="screen5-container">
             <div className="screen5-content-main">

                 <div className="screen5-heading-main">
                     <h1 className="screen5-heading">CONTRACTS</h1>
                 </div>

                 <div className="screen5-sub-mainbox">
                 
                     <div className="screen5-searchbar-main">
                     <div className="screen5-searchbar-border" >
                     <SearchIcon className="screen5-searchbar-icon"  />
                     <p className="screen5-searchbar-text">Select contract, client and team name</p>
                     </div>
                     </div> 

                 </div>

                 <div className="screen5-sortby-main">

                     <div className="screen5-sortb-text">
                         <h6>Sort By</h6>
                     </div>

                     <div className="screen5-startDate">

                     <div className="screen5-startDate-box">
                         <h6>Start Date</h6>
                         <ArrowDropDownIcon style={{fontSize:"30px"}} />
                     </div>

                     </div>

                     <div className="import-icon">
                         <ImportExportIcon style={{fontSize:"15px"}} />
                     </div>

                     <div className="Total">
                     <p>0 total</p>
                     </div>

                     <div className="screen5-CheckBoxIcon">
                         <CheckBoxIcon className="check" />
                         <p className="screen5-CheckBoxIcon-text"> includes closed contract</p>
                     </div>

                     <div className="screen5-download">
                         <PlayForWorkIcon style={{fontSize:"35px" ,color: 	"#1dc948"}} />
                         <p style={{fontSize:"15px" ,color: 	"#1dc948"}}>Download CSV</p>
                     </div>

                 </div>

                 <div className="screem5-lastTextbox">
                     <p>Contract you're actively working on will appear here <span style={{color: 	"#129cf7" }} className="screen5-blue">Start searchingfor new projects now.</span></p>
                 </div>

             </div>
         </div>   
        </>
    )
}

export default Screen5;
