import React, { useState } from 'react'
import styles from '../styles/Form.module.css'

const Form = ({ onFormSection }) => {
    // set up useStake hooks for different types of information
    // name, email, text number, notification, addressOne, addressTwo (optional), city, state, zip
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [notice, setNotice] = useState(0); /* 1 should be email, 2 should be text */
    const [addressOne, setAddressOne] = useState('');
    const [addressTwo, setAddressTwo] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState(''); // change to boolean with drop down.
    const [zip, setZip] = useState('');

    // handling changes to each state
    const handleNameChange = (e) => {

    };

    const handleEmailChange = (e) => {

    };

    const handleNumberChange = (e) => {

    };

    const handleNoticeChange = (e) => {

    }

    const handleAddressOneChange = (e) => {

    };

    const handleAddressTwoChange = (e) => {

    };

    const handleCityChange = (e) => {

    };

    const handleStateChange = (e) => {

    };

    const handleZipChange = (e) => {

    };

    const handleSubmit = (e) => {

    }

    // rendering of the above.
    return (
        <div className={styles['form-container']}>
            <div className={styles['form-statement']}>
                <h3 className={styles[onFormSection ? 'form-header-on' : 'form-header-off']}>
                    Please subscribe to stay informed:
                </h3>
            </div>
            <div className={styles[onFormSection ? 'form-intake-on' : 'form-intake-off']}>

                Name:
                <div className={styles['input-wrapper']}> <input type="text" className={`${styles['contact-long']} ${styles['contact-name-input']}`} onChange={handleNameChange} value={name} placeholder='please enter your full name' /></div>

                Email:
                <div className={styles['input-wrapper']}> <input type="text" className={`${styles['contact-long']} ${styles['contact-email-input']}`} onChange={handleEmailChange} value={email} placeholder='ex: myname@example.com' /></div>

                Text:
                <div className={styles['input-wrapper']}> <input type="text" className={`${styles['contact-medium']} ${styles['contact-number-input']}`} onChange={handleNumberChange} value={number} placeholder='please enter your phone number' /></div>
                <b />
                {/* Start of Email or Text */}
                Do you prefer an email or text notification?
                <div className={styles['inputs-container']} onChange={handleNoticeChange} value={notice}>
                    <div>
                        <input type="radio" id="email" name="e-mail" value="selectEmail" />
                        <label for="email">email</label>
                    </div>
                    <div>
                        <input type="radio" id="text" name="text" value=none />
                        <label for="text">text</label>
                    </div>
                </div>
                {/* End of Email or Text */}
                <br />
                Address Line 1:
                {/* improve on this: make layered: address 1, address 2, street addresss, city, state, zip code; pass test to ensure that the right info is provided */}
                <div className={styles['input-wrapper']}> <input type="text" className={`${styles['contact-long']} ${styles['contact-address-one-input']}`} onChange={handleAddressOneChange} value={addressOne} placeholder='please enter your address' /></div>

                <div className={styles['add-city']}>
                    <div className={styles['address-two-div']}>
                        Address Line 2 (optional):
                        <div className={styles['input-wrapper']}> <input type="text" className={`${styles['contact-medium']} ${styles['contact-address-two-input']}`} onChange={handleAddressTwoChange} value={addressTwo} placeholder='apt, suite, etc.' /></div>
                    </div>
                    <div className={styles['city-div']}>
                        City:
                        <div className={styles['input-wrapper']}> <input type="text" className={`${styles['contact-short']} ${styles['contact-city-input']}`} onChange={handleCityChange} value={city} /></div>
                    </div>

                </div>

                <div className={styles['state-zip']}>
                    <div className={styles['state-div']}>
                        State:
                        <div className={styles['input-wrapper']}> <input type="text" className={`${styles['contact-short']} ${styles['contact-state-input']}`} onChange={handleStateChange} value={state} /></div>
                    </div>
                    <div className={styles['zip-div']}>
                        ZIP Code:
                        <div className={styles['input-wrapper']}> <input type="text" className={`${styles['contact-short']} ${styles['contact-zip-input']}`} onChange={handleZipChange} value={zip} /></div>
                    </div>
                </div>

                <div className={styles['submit-button']}>
                    <button type='submit' onClick={handleSubmit}>Submit</button>
                </div>
            </div>




        </div>
    )
}

export default Form