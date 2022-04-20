import React, {useState, useEffect} from "react";
import {uuid} from 'uuidv4';
import Header from "./header";
import AddContact from "./addContact";
import ContactList from "./contactList";

function App(){
    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState([]); 

    const addContactHandler = (contact)=>{
        console.log(contact);
        setContacts([...contacts, {id:uuid(), ...contacts}]);
    };

    const removeContactHandler= (id)=>{
        const newContactList = contacts.filter((contact)=>{
            return contact.id !== id;
        });

        setContacts(newContactList);
    };

    // using use effect to sustain the data and to store it to the local storage so even after refreshing it the data will be visible to us.
    useEffect(()=>{
        const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if(retriveContacts)
        setContacts(retriveContacts);
    },[]);

    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);

    return(
        <div className="ui container">
            <Header />
            <AddContact addContactHandler={addContactHandler}/>
            <ContactList contacts={contacts} getContactId={removeContactHandler}/>
        </div>
    );
}

export default App;