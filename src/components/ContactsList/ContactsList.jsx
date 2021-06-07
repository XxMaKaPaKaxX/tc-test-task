import React from 'react';
import Contact from './subcomponents/Contact';

const ContactsList = ({ data }) => {
    const contactsEl = data.map(contact => <Contact key={contact.id} contactData={contact} />);
    return (
        <ul className='contacts-list list-group'>
            {contactsEl}
        </ul>
    );
}

export default ContactsList;