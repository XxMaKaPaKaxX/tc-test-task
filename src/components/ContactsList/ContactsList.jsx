import React from 'react';
import Contact from './subcomponents/Contact';

const ContactsList = ({ data, toggleStatus }) => {
    const contactsEl = data.map(contact => <Contact key={contact.id} contactData={contact} toggleStatus={toggleStatus} />);
    return (
        <ul className='contacts-list list-group'>
            {contactsEl}
        </ul>
    );
}

export default ContactsList;