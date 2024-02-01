import React, {useState, useEffect} from 'react'
// get useEffect for fetch api

const log = console.log;

const Client = () => {
    const [details, setDetails] = useState({})
    
    useEffect(() => {
        fetch("localhost:5000/api/getDetails")
        .then(res => res.json)
        .then(data => {setDetails(data)})
        .catch(err => console.error(err))
    })
    // log(details);
    return (
        <p>Hey</p>
    )
}

export default Client