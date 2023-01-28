import React, { useState } from 'react'
import styles from '../styles/Landing.module.css'
import Layout from './Layout'
import Display from './Display'
import Form from './Form'


const Landing = () => {

    const [subscribe, setSubscribe] = useState(false)

    const handleSubscribe = () => {
        return setSubscribe(!subscribe)
    }

    return (
        <Layout >
            <Display className={styles[subscribe ? 'no-display' : '']}} handleSubscribe={handleSubscribe} />
            <Form />
        </Layout >
    )
}

export default Landing