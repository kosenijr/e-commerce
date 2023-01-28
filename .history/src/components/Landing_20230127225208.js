import React, { useState } from 'react'
import Layout from './Layout'
import Display from './Display'
import Form from './Form'


const Landing = () => {

    const [subscribe, setSubscribe] = useState(false)

    const handleSubscribe = () => {
        setSubscribe(!subscribe)
    }

    return (
        <Layout >
            <Display  />
            <Form />
        </Layout >
    )
}

export default Landing