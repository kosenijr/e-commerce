import React, { useState } from 'react'
import styles from '../styles/Form.module.css'

const Form = () => {
    // set up useStake hooks for different types of information
    // name, email, text number, address (optional)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');

    // handling changes to each state
    const handleNameChange = (e) => {

    };

    const handleEmailChange = (e) => {

    };

    const handleNumberChange = (e) => {

    };

    const handleAddressChange = (e) => {

    };

    const handleSubmit = (e) => {

    }

    // rendering of the above.
    return (
        <div className={styles['form-container']}>
            <div className={styles['form-statement']}>
                <h3 className={styles['form-header-1']}>
                    Not sure if you have to move your vehicle today?
                </h3>

                <h3 className={styles['form-header-2']}>
                    Please subscribe to stay informed:
                </h3>
            </div>
            <div className={styles['form-intake']}>
                Name:
                <div className="input-wrapper"> <input type="text" className="contact-name-input" onChange={handleNameChange} value={name} placeholder='this name' /></div>
                <br />
                Email<div className="input-wrapper"> <input type="text" className="contact-mail-input" onChange={handleEmailChange} value={email} placeholder='this email' /></div>
                <br />
                I'd like to leave <div className="input-wrapper"> <input type="text" className="contact-message-input" onChange={handleNumberChange} value={number} placeholder='this message' /></div>
                <br />
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </div>




        </div>
    )
}

export default Form