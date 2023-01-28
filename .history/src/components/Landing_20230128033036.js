import React, { useState } from 'react'
import styles from '../styles/Landing.module.css'
import Layout from './Layout'
import Display from './Display'
import Form from './Form'

const log = console.log;

const Landing = () => {
    const [subscribe, setSubscribe] = useState(false);
    const [formSection, setFormSection] = useState(false);

    const handleSubscribe = () => {
        // console.log('this button works!');
        setSubscribe(!subscribe);
        setFormSection(!formSection);
    }

    return (
        <Layout >
            {/* onSubscribe has an inverse relationship with subscribe: when onSubscribe is true, subscribe is false, when onSubscribe is false, subscribe is true. */}
            <Display className={ } onSubscribe={subscribe} onHandleSubscribe={handleSubscribe} />
            <Form onFormSection={formSection} onHandleSubscribe={handleSubscribe} />
        </Layout >
    )
}

export default Landing