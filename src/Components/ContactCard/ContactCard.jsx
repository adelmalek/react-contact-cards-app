import { BsTrash } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import pic from "../../Image/profile.png";
import bckgrnd from "../../Image/background.jpg";
import { Link } from "react-router-dom";
import "./ContactCard.css";

export default function ContactCard(props) {
    const { name, email, id } = props.contact;

    return (
        <div className="contact-wrapper">
            <div className="contact-card">
                <img src={bckgrnd} alt="background-image" className="background-img"/>
                <Link to={`/contact/${id}`} state={{contact: props.contact}}>
                    <img src={pic} alt="name" className="profile-img"/>
                    <div className="contact-data">{name}</div>
                    <div className="contact-data">{email}</div>
                </Link>
                <ul className="icons">
                    <Link to="/edit" state={{contact: props.contact}} >
                        <li className="icon"><MdModeEdit/></li>
                    </Link>
                    <li onClick={() => props.deleteHandler(id)} className="icon"><BsTrash/></li>
                </ul>
            </div>
        </div>
    );
};