import React, { useState } from 'react'
import Layout from './Layout'
import Display from './Display'
import Form from './Form'


const Landing = () => {

    const [transition, setTransition] = useState(false);

    if (transition === true) {

    }
    
    

    return (
        <Layout >
            <Form />
            <Display />
        </Layout >
    )
}

export default Landing