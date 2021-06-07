import React, { useEffect, useState } from 'react';
import ContactsList from './components/ContactsList/ContactsList';
import { sortByLastName } from './utilities';
import './App.scss';

const App = () => {
    const url = 'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json';

    const [contactsData, setContactsData] = useState([]);

    const fetchData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        setContactsData(data)
    }

    useEffect(() => fetchData(url), []);

    contactsData.sort((a, b) => sortByLastName(a, b));
    console.log(contactsData)

    return (
        <>
            <section className='contacts container-sm d-flex flex-column'>
                <p className="contacts__header d-flex justify-content-center align-items-center m-0 py-3">Contacts</p>
                <input type="text" className='contacts__seaching-input' />
                <ContactsList data={contactsData} />
            </section>
        </>
    );
}

export default App;