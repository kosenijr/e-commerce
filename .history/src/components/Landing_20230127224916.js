import React, { useState } from 'react'
import Layout from './Layout'
import Display from './Display'
import Form from './Form'


const Landing = () => {

    const [subscribe, setSubscribe] = useState(false)


    
    if (transition === true) {

    }

    return (
        <Layout >
            <Display />
            <Form />
        </Layout >
    )
}

export default Landing