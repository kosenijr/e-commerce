import React, { useState } from 'react'
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
            <Display value={subscribe} onHandleSubscribe={handleSubscribe} />
            <Form />
        </Layout >
    )
}

export default Landing