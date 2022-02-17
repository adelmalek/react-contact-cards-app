import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./AddContact.css";

export default function AddContact(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || email === "") {
            alert("All fields are mandatory!");
            return;
        };
        props.addContactHandler({name, email});
        setName("");
        setEmail("");
        navigate("/");
    };

    const handleBack = () => {
        navigate("/");
    };

    return (
        <div className="add-contact-container">
            <div className="add-contact-box">
                <div className="left"></div>
                <form onSubmit={handleSubmit} className="right">
                    <h2 className="add-contact-title">Add Contact</h2>
                    <input type="text" 
                            name="name" 
                            placeholder="Name ..."
                            value={name}
                            onChange={ (e) => 
                                setName(e.target.value)
                            }
                            className="add-contact-input"/>
                
                    <input type="email" 
                            name="email" 
                            placeholder="Email ..."
                            value={email}
                            onChange={ (e) => 
                                setEmail(e.target.value)
                            }
                            className="add-contact-input"/>

                    <button className="add-btn">Add</button>
                </form>
            </div>
            <button className="back-btn" onClick={handleBack}>Back</button>
        </div>
    );
};