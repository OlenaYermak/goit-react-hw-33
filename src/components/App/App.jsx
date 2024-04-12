import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm"

import { useState, useEffect } from "react";



export default function App() {

     const getInitialContactsData = () => {
    const savedContactsData = localStorage.getItem("contactsData");
    return  JSON.parse(savedContactsData) 
    }
    
//     useEffect(()=>{
//     localStorage.setItem("feedbackClick", JSON.stringify(feedback))
//   } ,[feedback]);


    // const [contacts, setContacts] = useState(
    //     [
    //         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    //     ]);



 const [contacts, setContacts] = useState(getInitialContactsData);

    
    const addContacts = (newContact) => {
        setContacts((prevContacts) => { return [...prevContacts, newContact]; });
    };

       const deleteContacts = (contactId) => {
           setContacts((prevContacts) => { return prevContacts.filter((contact) => contact.id !== contactId);  });
    };
    
    const [filter, setFilter] = useState("");


    const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

     useEffect(()=>{
    localStorage.setItem("contactsData", JSON.stringify(contacts))
  } ,[contacts]);

    return (
        <div>
            <h1>Phonebook</h1>
            
            <ContactForm onAdd={addContacts } />
           
            <SearchBox value={filter} onFilter={ setFilter} />
            <ContactList contacts={visibleContacts } onDelete={deleteContacts} />
        </div>
    );
}
