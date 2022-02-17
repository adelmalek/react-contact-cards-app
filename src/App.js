import './App.css';
import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Header from "./Components/Header/Header";
import AddContact from "./Components/AddContact/AddContact";
import ContactList from "./Components/ContactList/ContactList";
import ContactDetails from "./Components/ContactDetails/ContactDetails";
import EditContact from "./Components/EditContact/EditContact";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const addContactHandler = (contact) => {
    setContacts(oldList => [...oldList, {id: uuidv4(), ...contact}]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter(contact => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  const upDateContactHandler = (contact) => {
    const { name, email, id } = contact;
    const newContactList = contacts.map( oldContact => {
      return oldContact.id === id ? {...contact} : oldContact;
    });
    setContacts(newContactList);
  };

  const searchContactHandler = (search) => {
    setSearchTerm(search);
    if (search !== "") {
      const newContactList = contacts.filter(contact => {
        const result = Object.values(contact).join(" ").toLowerCase().includes(search.toLowerCase());
        return result;
      });
      setSearchResult(newContactList);
    } else {
      setSearchResult(contacts);
    };
  };

  useEffect( () => {
    const getContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (getContacts) {
      setContacts(getContacts);
    };
  }, []);

  useEffect( () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const ContactListJsx = <ContactList 
                            contacts={searchTerm.length < 1 ? contacts : searchResult} 
                            getContactId={removeContactHandler} 
                            term={searchTerm}
                            searchKeyword={searchContactHandler}
                          />;

  return (
    <div className="App">
      <HashRouter>
        <Header/>
        <Routes>
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>} />
          <Route path="/" exact element={ContactListJsx}/>
          <Route path="/contact/:id" element={<ContactDetails/>} />
          <Route path="/edit" element={<EditContact upDateContactHandler={upDateContactHandler}/>} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
