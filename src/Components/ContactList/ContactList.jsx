import ContactCard from "../ContactCard/ContactCard";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import "./ContactList.css";
import "../ContactCard/ContactCard.css";

export default function ContactList(props) {
    const deleteContact = (id) => {
        props.getContactId(id);
    };

    const renderContacts = props.contacts.map( (contact, key) => {
        return <ContactCard key={contact.id} contact={contact} deleteHandler={deleteContact}/>
    });

    const getSearch = (e) => {
        props.searchKeyword(e.target.value)
    };

    return (
        <div className="contact-list-div">
            <div>
                <div className="search-box">
                    <input type="text" placeholder="Search Contact" value={props.term} onChange={getSearch} className="search-input"/>
                    <span className="search-icon"><IoSearchOutline/></span>
                </div>
            </div>
            <div className="top-border">
                <h2 className="list-title">Contact List</h2>
                <Link to="/add">
                    <button className="new-btn">New Contact</button>
                </Link>
            </div>
            <div className="contact-wrapper">{renderContacts.length > 0 ? renderContacts : <div className="noresults">Contact is not available.</div>}</div>
        </div>
    );
};