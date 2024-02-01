import React, {useState, useEffect} from 'react'
// get useEffect for fetch api

const log = console.log;

const Client = () => {
    const [details, setDetails] = useState({})
    
    useEffect(() => {
        fetch("/")
        .then(res => res.json)
        .then(data => setDetails(data))
    })

    return (
        <p>Hey</p>
    )
}

export default Client