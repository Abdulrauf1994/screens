import React from 'react'
import './Account.css';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const Account = () => {
    return (
        <>
        <div className="account-container">
            <div className="account">
                <h4 className="account-heading">COMPELETE YOUR FREE ACCOUNT SETUP</h4>
                
                <div className="account-inputmain">
                
                <div className="account-inputs">
                <i class="zmdi zmdi-account"></i>
                <input className="account-inputone" />
                </div>

                <div className="account-inputs">
                <i class="zmdi zmdi-account"></i>
                <input className="account-inputone" />
                </div>

                </div>

                <div className="sec-input-main">
                <i class="zmdi zmdi-lock"></i>
                <input className="sec-input" />
                </div>

                <div className="option-main">
                <select className="opttion-manu">
                    <option className="opyion-list">
                        Pakistan
                    </option>
                </select>
                </div>

                <p className="para-want">I Want To</p>

                <div className="para-main">
                <div className="para-onebox">
                    <p className="para-one">Hire For a Project</p>
                    </div>
                    <div className="para-twobox">
                    <p className="para-two">Work as a Freelancer</p>
                    </div>
                </div>
                
                <div className="third3-input-main">
                <p className="third-input-icon"><i class="zmdi zmdi-account"></i></p>
                <input className="third-input" />
                </div>

                <div className="account-sec-para">
                <i class="zmdi zmdi-square-o"></i>
                <p className="secpara">Yes! Send me geniunely useful emails every now 
                and then to help me get most out of Novearts.</p>
                </div>

                <div className="account-third-para">
                <CheckBoxIcon className="check-square" />
                <p className="third-para">Yes,I Understand and agree to the Novearts terms
                of services including the user agreement and Privacy policy</p>
                </div>

                <button className="account-btn">Create My Account</button>
            </div>
        </div>
        </>
    )
}

export default Account;
