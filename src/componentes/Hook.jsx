import React, { useState,useEffect } from 'react'

export default props => {
    const [count, setCount] = useState(100);
    const [status, setParOuImpar] = useState('Par')

    useEffect(()=>{
        count %2 === 0 ? setParOuImpar('Par') : setParOuImpar('Impar')
    }, [count])

    return (
        <div>
            <h1>{count}</h1>
            <h3>{status}</h3>

            <button onClick={() => setCount(count+1)} >Inc</button>
            <button onClick={() => setCount(count-1)} >Dec</button>

        </div>
    )
}