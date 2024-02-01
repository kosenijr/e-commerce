import React, {useState, useEffect} from 'react'
// get useEffect for fetch api

const log = console.log;

const Client = () => {
    const [dateInfo, setDateInfo] = useState({})
    const [details, setDetails] = useState({})
    
    useEffect(() => {
        fetch("/")
        .then(res => res.json)
        .then(data => log(data))
    })

    return (
        <p>Hey</p>
    )
}

export default Client