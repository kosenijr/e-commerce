import React, {useEffect, useState} from 'react'

const url = require("../../back-end/server")
// get useEffect for fetch api

const log = console.log;

const Client = () => {
    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch("")
        .then(res => log(res))
    })
   
    return (
        <p>Hey</p>
    )
}

export default Client