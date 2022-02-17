import pic from "../../Image/profile.png";
import bckgrnd from "../../Image/background.jpg";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "./ContactDetails.css";

export default function ContactDetails(props) {
    const location = useLocation();
    const { contact } = location.state;

    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/");
    };

    return (
        <div className="contact-details-wrapper">
            <div className="contact-details-box">
                <img src={bckgrnd} alt="background-image" className="background-img"/>
                <img src={pic} alt={contact.name} className="profile-img"/>
                <div className="contact-data">{contact.name}</div>
                <div className="contact-data">{contact.email}</div>
            </div>
            <button className="back-btn" onClick={handleBack}>Back</button>
        </div>
    );
};