import React, { useState } from 'react'
import styles from '../styles/Landing.module.css'
import Layout from './Layout'
import Display from './Display'
import Form from './Form'
import Thanks from './Thanks'

const log = console.log;

const Landing = () => {
    const [subscribe, setSubscribe] = useState(false);
    const [formSection, setFormSection] = useState(false);
    const [thanks, setThanks] = useState(false);

    const handleSubscribe = () => {
        // console.log('this button works!');
        setSubscribe(!subscribe);
        setFormSection(!formSection);
    }
    
    const handleThanks = () => {
        console.log('working on thanks');
        setThanks(!thanks);
    }

    return (
        <Layout >
            {/* onSubscribe has an inverse relationship with subscribe: when onSubscribe is true, subscribe is false, when onSubscribe is false, subscribe is true. */}
            <Display onSubscribe={subscribe} onHandleSubscribe={handleSubscribe} />
            <Form onFormSection={formSection} onHandleSubscribe={handleSubscribe} onHandlethanks={handlethanks}/>
            <Thanks onthanks={thanks} onHandlethanks={handlethanks} />
        </Layout >
    )
}

export default Landing