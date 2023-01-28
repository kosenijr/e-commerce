import React, { useState } from 'react'
import styles from '../styles/Landing.module.css'
import Layout from './Layout'
import Display from './Display'
import Form from './Form'

const log = console.log;

const Landing = () => {
    const [subscribe, setSubscribe] = useState(false);
    log(subscribe);
    const handleSubscribe = () => {
        // console.log('this button works!');
        setSubscribe(!subscribe);
    }

    return (
        <Layout >
            {/*  */}
            <Display onSubscribe={subscribe}  onHandleSubscribe={handleSubscribe} />
            <Form />
        </Layout >
    )
}

export default Landing