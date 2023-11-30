import React, {useEffect, useState} from 'react'
// get useEffect for fetch api

const log = console.log;

const Client = () => {
    const [details, setDetails] = useState({})
    
    useEffect(() => {
        fetch("localhost:5000/")
        .then(res => log(res))
r))
    })
    // log(details);
    return (
        <p>Hey</p>
    )
}

export default Client