import React, { useState } from 'react'
import styles from '../styles/Form.module.css'

const Form = () => {
    // set up useStake hooks for different types of information
    // name, email, text number, notification, address (optional)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [notice, setNotice] = useState(0); /* 1 should be email, 2 should be text */
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

    const handleNoticeChange = (e) => {

    }

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
                <div className={styles['input-wrapper']}> <input type="text" className={styles['contact-long'] && styles['contact-name-input']} onChange={handleNameChange} value={name} placeholder='please enter your full name' /></div>

                Email:
                <div className={styles['input-wrapper']}> <input type="text" className={styles['contact-long']} onChange={handleEmailChange} value={email} placeholder='please enter your email' /></div>
                Text:
                <div className={styles['input-wrapper']}> <input type="text" className={styles['contact-long']} onChange={handleNumberChange} value={number} placeholder='please enter your phone number' /></div>
                <b />
                Do you prefer an email or text notification?
                <div className={styles['inputs-container']} onChange={handleNoticeChange} value={notice}>
                    <div>
                        <input type="radio" id="email" name="e-mail" value="selectEmail" />
                        <label for="email">email</label>
                    </div>
                    <div>
                        <input type="radio" id="text" name="text" value="electText" />
                        <label for="text">text</label>
                    </div>
                </div>
                Address Line 1:
                {/* improve on this: make layered: address 1, address 2, street addresss, city, state, zip code; pass test to ensure that the right info is provided */}
                <div className={styles['input-wrapper']}> <input type="text" className={styles['contact-long']} onChange={handleAddressChange} value={address} placeholder='please enter your address' /></div>
                Address Line 2 (optional):
                <div className={styles['input-wrapper']}> <input type="text" className={styles['contact-long']} onChange={handleAddressChange} value={address} placeholder='please enter your address' /></div>
                City:
                <div className={styles['input-wrapper']}> <input type="text" className={styles['contact-short']} onChange={handleAddressChange} value={address} placeholder='please enter your address' /></div>
                State:
                <div className={styles['input-wrapper']}> <input type="text" className={styles['contact-short']} onChange={handleAddressChange} value=
                    {address} placeholder='please enter your address' /></div>
                ZIP Code:
                <div className={styles['input-wrapper']}> <input type="text" className={styles['contact-short']} onChange={handleAddressChange} value=
                    {address} placeholder='please enter your address' /></div>
                <br />
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </div>




        </div>
    )
}

export default Form