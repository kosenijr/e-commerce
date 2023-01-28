import React, { useState } from 'react'
import styles from '../styles/Display.module.css'

const Display = () => {

    const log = console.log;

    const [subscribe, setSubscribe] = useState(false)

    const handleSubscribe = () => {
        log()
    }

    return (
        <div className={styles['display-container']}>
            <span className={styles['display-header']}></span>
            <div className={styles['display-section']}>
                <h4 className={styles['call-to-action']}>
                    Be the first to know the daily status of alternate-side parking within New York City.
                </h4>
                <button className={styles['call-to-action-button']}>Subscribe</button>
            </div>
        </div>
    )
}

export default Display