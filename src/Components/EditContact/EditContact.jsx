import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import "./EditContact.css";

export default function EditContact(props) {
    const location = useLocation();
    const { contact } = location.state;
    const [name, setName] = useState(contact.name);
    const [email, setEmail] = useState(contact.email);
    const [id, setId] = useState(contact.id);

    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        const trimmedName = name.trim();
        if (trimmedName === "" || email === "") {
            alert("All fields are mandatory!");
            return;
        };
        props.updateContactHandler({trimmedName, email, id});
        setName("");
        setEmail("");
        navigate("/");
    };

    const handleBack = () => {
        navigate("/");
    };

    return (
        <div className="edit-contact-container">
            <div className="edit-contact-box">
                <div className="left"></div>
                <form onSubmit={handleUpdate} className="right">
                    <h2 className="edit-contact-title">Edit Contact</h2>
                    <input type="text" 
                           name="name" 
                           placeholder="Name ..."
                           value={name}
                           onChange={ (e) => 
                               setName(e.target.value)
                           }
                           className="edit-contact-input"/>
                
                    <input type="email" 
                           name="email" 
                           placeholder="Email ..."
                           value={email}
                           onChange={ (e) => 
                               setEmail(e.target.value)
                           }
                           className="edit-contact-input"/>
                
                    <button className="edit-btn">Update</button>
                </form>
            </div>
            <button className="back-btn" onClick={handleBack}>Back</button>
        </div>
    );
};