import React, {Component} from 'react';
import queryString from "query-string";
import AdminForms from "./CreateFormsComponent";

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
                    <AdminForms
                        postBio={this.props.postBio}
                        resetBioForm={this.props.resetBioForm}
                        postCourse={this.props.postCourse}
                        resetCourseForm={this.props.resetCourseForm}
                        postJob={this.props.postJob}
                        resetJobForm={this.props.resetJobForm}
                        postProject={this.props.postProject}
                        resetProjectForm={this.props.resetProjectForm}
                    />
                    <button onClick={this.logout}>Logout</button>
                </>
            )
        }
        return (
            <>
                <h1>Admin Page</h1>
                <p>Debes estar logueado para acceder a esta página</p>
                <a className="btn" href="http://localhost:5000/auth/google">Login Google</a>
            </>
        )
    }
}


export default Admin;