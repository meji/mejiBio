import React from 'react';
import Contact from './ContactComponent';
import Projects from "./ProjectsComponent";
import {Loading} from './LoadingComponent'
import LoginGoogle from "./LoginGoogle";
function Hero ({bio, isLoading, errMess}) {
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
            {console.log(bio)}
            <p>Name {bio.name}</p>
            <p><img src={bio.pic} alt={bio.name} title={bio.name}/></p>
            <p>{bio.bio}</p>
        </div>
    )
}


function Home(props) {
    return (
        <>
            <Hero
                bio={props.bio}
                isLoading = {props.bioLoading}
                errMess = {props.bioErrMess}/>
            <LoginGoogle/>
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