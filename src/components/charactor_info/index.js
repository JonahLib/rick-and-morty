import React from "react"

export const CharactorInfo = (props) => {
    return(
        <main>
            <h1>{props.props.data.name}</h1>
            <img src={props.props.data.image} alt= {props.props.data.name}/>
            <h2>species: {props.props.data.species}</h2>
            <h2>Gender: {props.props.data.gender}</h2>
            <h2>status: {props.props.data.status}</h2>
            <h2>origins: {props.props.data.origin.name}</h2>
            <h2> {props.props.data.name} Features In {props.props.data.episode.length} Epidodes </h2>

        </main>
    )
}