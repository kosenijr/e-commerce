import React, {useEffect, useState} from 'react'
// get useEffect for fetch api

const log = console.log;

const Client = () => {
    const [details, setDetails] = useState({})
    log(urlWithParams)
    useEffect(() => {
        fetch("")
        .then(res => log(res))
    })
   
    return (
        <p>Hey</p>
    )
}

export default Client