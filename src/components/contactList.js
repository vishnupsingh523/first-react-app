import React from 'react';
import ContactCard from './ContactCard';
const ContactList= (props)=>{
    const renderContactList = props.contacts.map((contact)=>{
        return (
            <ContactCard name=''
        )
    });
    return(
        <div className="ui called list">
            {renderContactList}
        </div>
    )
};

export default ContactList;