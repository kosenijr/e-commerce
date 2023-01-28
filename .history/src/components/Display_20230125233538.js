import React, { useState } from 'react'
import styles from '../styles/Display.module.css'

const Display = () => {

    const log = console.log;

    const [subscribe, setSubscribe] = useState(false)

    const handleSubscribe = () => {
        log('button is working')
    }

    return (
        <div className={styles['display-container']}>
            <div className={styles['form-statement']}>
                <h3 className={styles['form-header-1']}>
                    Not sure if you have to move your vehicle today?
                </h3>

                <h3 className={styles['form-header-2']}>
                    Please subscribe to stay informed:
                </h3>
            </div>
            <span className={styles['display-header']}></span>
            <div className={styles['display-section']}>
                <h4 className={styles['call-to-action']}>
                    Be the first to know the daily status of alternate-side parking within New York City.
                </h4>
                <button className={styles['call-to-action-button']} onClick={() => handleSubscribe()}>Subscribe</button>
            </div>
        </div>
    )
}

export default Display