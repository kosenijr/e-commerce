import React, {useState} from 'react'
import styles from '../styles/Form.module.css'

const Form = () => {
    // set up useStake hooks for different types of information
    // name, email, text number, address (optional)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');
    
    


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

            </div>




        </div>
    )
}

export default Form