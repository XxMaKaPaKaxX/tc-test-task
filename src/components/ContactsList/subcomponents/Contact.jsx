import React, { useState } from 'react';
import './Contact.scss';

const Contact = ({ contactData }) => {
    const [isSelect, setIsSelect] = useState(false);

    const handleOnToggle = () => {
        console.log(contactData.id);
        setIsSelect(!isSelect);
    }


    return (
        <li className='contact list-group-item d-flex justify-content-between align-items-center' onClick={handleOnToggle}>
            <div className='contact__avatar-and-name-container d-flex'>
                <div className='contact__avatar-container d-flex justify-content-center align-items-center'>
                    {contactData.avatar
                        ? <img src={contactData.avatar} alt="" />
                        : <span>{`${contactData.first_name.slice(0, 1)}${contactData.last_name.slice(0, 1)}`}</span>
                    }
                </div>
                <p className='contact__name my-0 mx-3 d-flex justify-content-between align-items-center'>{contactData.first_name} {contactData.last_name}</p>
            </div>
            <input className='contact__checkbox' type="checkbox" checked={isSelect} readOnly />
        </li>
    );
}

export default Contact;