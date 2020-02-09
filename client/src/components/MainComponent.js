import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Project from './ProjectComponent';
import Projects from './ProjectsComponent';
import Admin from './AdminComponent'
import Cv from './CvComponent';
import {Switch, Route, Redirect, withRouter, BrowserRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {fetchBio, fetchJobs, fetchProjects, fetchCourses, postMessage, loginGoogle} from '../redux/ActionCreators'
import {actions} from 'react-redux-form'
import queryString from "query-string";

const mapStateToProps = state =>{
    return {
        bio : state.bio,
        jobs: state.jobs,
        projects : state.projects,
        courses : state.courses,
        token: state.token
    }
}


const mapDispatchtoProps = (dispatch) => ({
    postMessage: (firstname, lastname, telnum, email, agree, contactType, messagetext, subject) => {dispatch(postMessage(firstname, lastname, telnum, email, agree, contactType, messagetext, subject))},
    resetMessageForm: () => {dispatch(actions.reset('message'))},
    fetchBio: () =>{dispatch(fetchBio())},
    fetchJobs: () =>{dispatch(fetchJobs())},
    fetchProjects: () =>{dispatch(fetchProjects())},
    fetchCourses: () =>{dispatch(fetchCourses())},
})


const ProjectWithId = ({match}) =>{
    return(
        <Project project = {this.props.projects.projects.filter((project)=> project.id === parseInt(match.params.projectId, 10))[0]}/>
    )
}

class Main extends Component{

    componentDidMount() {
        this.props.fetchBio();
        this.props.fetchJobs();
        this.props.fetchProjects();
        this.props.fetchCourses();
    }

    render() {
        return(
            <div>
                <Header/>
                <main>
                    <Switch>
                        <Route exact path="/" component={()=> <Home
                            bio={this.props.bio.bio}
                            bioLoading={this.props.bio.isLoading}
                            bioErrMess={this.props.bio.errMess}
                            projects={this.props.projects.projects.filter(project => project.featured === true)}
                            projectsLoading={this.props.projects.isLoading}
                            projectsErrMess={this.props.projects.errMess}
                            postMessage= {this.props.postMessage}
                            resetMessageForm={this.props.resetMessageForm}
                            />}/>
                        />}/>
                        <Route exact path="/cv" component={()=><Cv
                            projects={this.props.projects.projects.filter(project => project.featured === true)}
                            projectsLoading={this.props.projects.isLoading}
                            projectsErrMess={this.props.projects.errMess}
                            courses={this.props.courses.courses}
                            coursesLoading={this.props.courses.isLoading}
                            coursesErrMess={this.props.courses.errMess}
                            jobs={this.props.jobs.jobs}
                            jobsLoading={this.props.jobs.isLoading}
                            jobsErrMess={this.props.projects.errMess}
                        />}/>
                        <Route exact path="/projects" component={()=> <Projects
                            projects={this.props.projects.projects}
                            projectsLoading={this.props.projects.isLoading}
                            projectsErrMess={this.props.projects.errMess}
                        />}/>
                        <Route path="/projects/:projectId" component={ProjectWithId}/>
                        <Route path="/admin" component={Admin}/>
                        <Redirect to="/"/>
                    </Switch>
                </main>
                <Footer/>
            </div>
        );
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(Main));