import React from 'react';
import Contact from './ContactComponent';
import Projects from "./ProjectsComponent";
import {Loading} from './LoadingComponent'
function Hero ({bios, isLoading, errMess}) {
    if(isLoading){
            return(
                <Loading/>
            );
        }
        else if(errMess) {
        return (
            <h4>{errMess}</h4>
        )
    }
    return(

        <div>
            <p>Name {bios.name}</p>
            <p><img src={bios.img} alt={bios.name} title={bios.name}/></p>
            <p>{bios.biotext}</p>
        </div>
    )
}


function Home(props) {
    return (
        <>
            <Hero
                bios={props.bios}
                isLoading = {props.bioLoading}
                errMess = {props.bioErrMess}/>
            <Projects
                projects={props.projects}
                isLoading = {props.projectsLoading}
                errMess = {props.projectsErrMess}/>
            <Contact
                postMessage= {props.postMessage}
                resetMessageForm={props.resetMessageForm}
                 />
        </>
    );
}


export default Home;