import React from 'react'
const Error = () => {
    return(
        <>
            <h1>{message}</h1>
            <h2>{error.status}</h2>
            <pre>{error.stack}</pre>
        </>
    )
}
export default Error