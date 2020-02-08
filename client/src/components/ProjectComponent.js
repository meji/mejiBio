import React from 'react';


function Project(props){
    return (
        <div className="Proyect-view">
            <h2>{props.name}</h2>
            <p>{props.charge}</p>
            <p>{props.description}</p>
            <p>{props.client}</p>
            <p>{props.date}</p>
        </div>
    )
}

export default Project