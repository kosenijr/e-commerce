import React, {useEffect, useState} from 'react'
import {urlWithParams}
 from '../back-end/server';
// get useEffect for fetch api

const log = console.log;
const Client = () => {
    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch(urlWithParams)
        .then(res => log(res))
    })
   
    return (
        <p>Hey</p>
    )
}

export default Client