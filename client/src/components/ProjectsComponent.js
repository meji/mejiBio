import React  from 'react';
import {Loading} from "./LoadingComponent";
import {baseUrl} from '../shared/baseUrl'

function Project({project}){
    return (
        <li className="featured-proyect">
            <h2>{project.name}</h2>
            <img className="logo-img" src={baseUrl+"projects/img/"+project.logo} alt={project.name} title={project.name}/>
            <img className="main-img" src={baseUrl+"projects/img/"+project.img} alt={project.name} title={project.name}/>
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

