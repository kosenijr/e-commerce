import React, {useEffect, useState} from 'react'
// import {urlWithParams}
//  from '../back-end/server.js';
// get useEffect for fetch api

const log = console.log;
// No import needed
const urlWithParams = process.env.PUBLIC_URL + '/server.js';

const Client = () => {
    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch(urlWithParams)
        .then(res => log(res.json()))
    })
   
    return (
        <p>Hey</p>
    )
}

export default Client