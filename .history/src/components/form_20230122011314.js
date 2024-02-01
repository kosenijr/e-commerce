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
                <div className={styles['input-wrapper']}> <input type="text" className="contact-name-input" onChange={handleNameChange} value={name} placeholder='please enter your full name' /></div>
                <br />
                Email:
                <div className={styles['input-wrapper']}> <input type="text" className="contact-mail-input" onChange={handleEmailChange} value={email} placeholder='please enter your email' /></div>
                <br />
                Text:
                <div className={styles['input-wrapper']}> <input type="text" className="contact-message-input" onChange={handleNumberChange} value={number} placeholder='please ebter your phone number for text messaging' /></div>
                <br />
                <div className={styles['inputs-container']}>
                    Do you prefer an email or text notification?
                    <br />
                    <div>
                        <input type="radio" id="email" name="e-mail" value="selectEmail" />
                        <label for="email">email</label>
                    </div><div>
                        <input type="radio" id="text" name="text" value="electText" />
                        <label for="text">text</label>
                    </div>
                </div>
                <br />
                Address:
                <div className={styles['input-wrapper']}> <input type="text" className="contact-message-input" onChange={handleNumberChange} value={number} placeholder='this message' /></div>
                <br />
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </div>




        </div>
    )
}

export default Form