import React from 'react'

export default function Taco({state}) {
    return (
        <div>
            <h1>{state.taco.name}</h1>
        </div>
    )
}
