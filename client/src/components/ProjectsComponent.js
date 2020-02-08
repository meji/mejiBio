import React  from 'react';
import {Loading} from "./LoadingComponent";

function Project({project}){
    return (
        <li>
            <h2>Proyecto: {project.name}</h2>
            <p>{project.charge}</p>
            <p>{project.description}</p>
            <p>{project.client}</p>
            <p>{project.date}</p>
        </li>
    )
}

function Projects(props) {
    const projects = props.projects.map((project)=> {
            return (<Project project={project} key={project._id}/>)
    });
    if(props.projectsLoading){
        return(
            <Loading/>
        );
    }
    else if(props.projectsErrMess) {
        return (
            <h4>{props.projectsErrMess}</h4>
        )
    }
    return(
        <div>
            <h2>Projects</h2>
            <ul>
                {projects}
            </ul>
        </div>
    )
}
export default Projects

