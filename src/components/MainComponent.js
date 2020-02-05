import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Projects from './ProjectsComponent';
import Project from './ProjectComponent';
import Cv from './CvComponent';
import {Switch, Route, Redirect} from 'react-router-dom'


const ProjectWithId = ({match}) =>{
    return(
        <Project project = {this.props.projects.projects.filter((project)=> project.id === parseInt(match.params.projectId, 10))[0]}/>
    )
}

class Main extends Component{ 
    constructor(props){
      super(props);

    }
    render() {
        return(
            <div>
                <Header/>
                <main>
                    <Switch>
                        <Route path="/" component={Home}/>
                        <Route exact path="/cv" component={Cv}/>
                        <Route exact path="/projects" component={Projects}/>
                        <Route path="/menu/:projectId" component={ProjectWithId}/>
                        <Redirect to="/"/>
                    </Switch>
                </main>
                <Footer/>
            </div>
        );
    }
}
export default Main;  