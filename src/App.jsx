import React, { useEffect, useState } from 'react';
import ContactsList from './components/ContactsList/ContactsList';
import { sortByLastName } from './utilities';
import './App.scss';

const App = () => {
    const url = 'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json';

    const [contactsData, setContactsData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        const extendedData = data.map(contact => {
            return { ...contact, isSelected: false }
        });
        extendedData.sort((a, b) => sortByLastName(a, b));
        setContactsData(extendedData);
    }

    useEffect(() => fetchData(url), []);

    const handleOnChangeSearch = (event) => {
        setSearchQuery(event.target.value);
    }

    const toggleContactSelectStatus = (id) => {
        setContactsData(contactsData.map(contact => {
            if (contact.id === id) {
                return { ...contact, isSelected: !contact.isSelected }
            } else return contact
        }))
    }

    const filteredContacts = searchQuery.length === 0 ? contactsData : contactsData.filter(contact => {
        const normalisedSearchQuery = searchQuery.toLowerCase();
        const normalisedFirstName = contact.first_name.toLowerCase();
        const normalisedLastName = contact.last_name.toLowerCase();
        return (normalisedFirstName.includes(normalisedSearchQuery)) || (normalisedLastName.includes(normalisedSearchQuery));
    });


    return (
        <>
            <section className='contacts container-sm d-flex flex-column'>
                <p className="contacts__header d-flex justify-content-center align-items-center m-0 py-3">Contacts</p>
                <input type="text" className='contacts__seaching-input' value={searchQuery} onChange={handleOnChangeSearch} />
                <ContactsList data={filteredContacts} toggleStatus={toggleContactSelectStatus} />
            </section>
        </>
    );
}

export default App;