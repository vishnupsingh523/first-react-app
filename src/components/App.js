import React from "react";
// import './App.css';
import Header from "./header";
import AddContact from "./addContact";
import ContactList from "./contactList";

function App(){

    const contacts =[
        {
        id: "1",
        "name": "Vishwanath",
        email: "vishnupsing523@gmail.com"
        },
        {
            id: "2",
            "name": "Nischal",
            email: "rajnischal999@gmail.com"
        }
    ];

    return(
        <div className="ui container">
            <Header />
            <AddContact />
            <ContactList contacts={contacts} />
        </div>
    );
}

export default App;