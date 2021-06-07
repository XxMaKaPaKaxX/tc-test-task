import React from 'react';
import './Contact.scss';

const Contact = ({ contactData, toggleStatus }) => {

    const { avatar, id, isSelected, first_name, last_name } = contactData

    return (
        <li className='contact list-group-item d-flex justify-content-between align-items-center' onClick={() => toggleStatus(id)}>
            <div className='contact__avatar-and-name-container d-flex'>
                <div className='contact__avatar-container d-flex justify-content-center align-items-center'>
                    {avatar
                        ? <img src={avatar} alt="" />
                        : <span>{`${first_name.slice(0, 1)}${last_name.slice(0, 1)}`}</span>
                    }
                </div>
                <p className='contact__name my-0 mx-3 d-flex justify-content-between align-items-center'>{first_name} {last_name}</p>
            </div>
            <input className='contact__checkbox' type="checkbox" checked={isSelected} readOnly />
        </li>
    );
}

export default Contact;