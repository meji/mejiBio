import React from 'react';
import {Loading} from './LoadingComponent'
import { baseUrl } from '../shared/baseUrl'

function Project(props) {
  if (props.isLoading) {
    return (
      <div className="Project-view">
        <Loading/>
      </div>
    )
  } else if (props.ErrMess) {
    return (
      <h4>{props.errMess}</h4>
    )
  } else {
    return (
      <div className="project-view">
        <div className="hero">
          <div className="container">
            <h1>{props.project.name}</h1>
          </div>
          <img className="main-img" src={baseUrl+"projects/img/"+props.project.img} alt={props.project.name} title={props.project.name}/>
        </div>
        <aside>
          <p>{props.project.charge}</p>
          <p>{props.project.client}</p>
          <p>{props.project.date}</p>
        </aside>
        <p>{props.project.description}</p>
      </div>
    )
  }
}

export default Project
