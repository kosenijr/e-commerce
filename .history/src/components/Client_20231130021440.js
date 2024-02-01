import React, {useEffect, useState} from 'react'
import {urlWithParams} from '../../server/server'
// get useEffect for fetch api

const log = console.log;
log(urlWithParams);
const Client = () => {
    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch(urlWithParams)
        .then((res) => res.json)
        .then((data) => log(data))
        .catch((err) => console.error(`Error: ${err}`));
    }, []);
   
    return (
        <p>Hey</p>
    )
}

export default Client