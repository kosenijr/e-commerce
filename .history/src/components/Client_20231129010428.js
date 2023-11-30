import React, {useEffect, useState} from 'react'
// import {urlWithParams}
//  from '../back-end/server.js';
// get useEffect for fetch api

const log = console.log;
log(process.env.SUBSCRIPTION_KEY)
const Client = () => {
    const [details, setDetails] = useState({})

    // useEffect(() => {
    //     fetch(urlWithParams)
    //     .then(res => log(res))
    // })
   
    return (
        <p>Hey</p>
    )
}

export default Client