import React from 'react';
import './Popup.css';

const Popup = ({closePopup,id,name,username,email,city}) => {
    return(
        <div className="popup--back">
            <div className="popup--content">
                <div className="popup--close" onClick={closePopup}>
                    x
                </div>
                <div style={{float:'left'}}><img src={`https://robohash.org/${id}?200x200`} alt="roboImage"/></div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div >
                    <h3>name:{name}</h3>
                    <h3>username:{username}</h3>
                    <h3>email:{email}</h3>
                    <h3>city:{city}</h3>
                </div>
            </div>
        </div>
    )
}

export default Popup;