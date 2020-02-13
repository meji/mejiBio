import React, {Component} from 'react';
import queryString from 'query-string';
import  NewBio from './adminForms/NewBio'
import  NewJob from './adminForms/NewJob'
import  NewCourse from './adminForms/NewCourse'
import  NewProject from './adminForms/NewProject'
import {baseUrl} from '../shared/baseUrl'

class Admin extends Component{
    constructor(props) {
        super(props);
        this.logout= this.logout.bind(this)
    }
    componentDidMount() {
        const query = queryString.parse(this.props.location.location.search);
        if (query.token) {
            window.localStorage.setItem("jwt", query.token);
            window.location.href='/admin/';
        }
    }
    logout(){
        window.localStorage.clear();
        window.location.href='/admin/';
    }

    render() {
        if (this.props.authenticated === true) {
            return (
                <>
                    <h1> Autenticado</h1>
                    <NewBio
                        postBio={this.props.postBio}
                        resetBioForm={this.props.resetBioForm}/>
                    <NewCourse
                        postCourse={this.props.postCourse}
                        resetCourseForm={this.props.resetCourseForm}
                    />
                    <NewJob
                        postJob={this.props.postJob}
                        resetJobForm={this.props.resetJobForm}
                    />
                    <NewProject
                        postProject={this.props.postProject}
                        resetProjectForm={this.props.resetProjectForm}
                        postImgProject={this.props.postImgProject}
                    />
                    <button onClick={this.logout}>Logout</button>
                </>
            )
        }
        return (
            <>
                <h1>Admin Page</h1>
                <p>Debes estar logueado para acceder a esta página</p>
                <a className="btn" href={baseUrl+"auth/google"}>Login Google</a>
            </>
        )
    }
}


export default Admin;
