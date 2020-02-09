import React, {Component} from 'react';
import queryString from "query-string";



class Admin extends Component{
    componentWillMount() {
        console.log(this.props.location)
        const query = queryString.parse(this.props.location.search);
        if (query.token) {
            window.localStorage.setItem("jwt", query.token);
            this.props.history.push("/admin");
        }
    }
    render() {
        return (
            <>
                <h1>Admin Page</h1>
                <a href="http://localhost:5000/auth/google">Login Google</a>
            </>
        )
    }
}


export default Admin;