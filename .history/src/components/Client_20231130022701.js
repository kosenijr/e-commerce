import React, {useEffect, useState} from 'react'

// get useEffect for fetch api

const [log, urlWithParams] = [console.log, "/"]

log(process.env);

const Client = () => {
    const [details, setDetails] = useState({})

    // useEffect(() => {
    //     fetch(urlWithParams)
    //     .then(res => res.json())
    //     .then(data => log(data))
    //     .catch((err) => console.error(`Error: ${err}`));
    // }, []);
   
    return (
        <p>Hey</p>
    )
}

export default Client