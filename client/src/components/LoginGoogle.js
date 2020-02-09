import React, {Component} from 'react';



class LoginGoogle extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <a href="http://localhost:5000/auth/google">Login Google</a>
        );
    }
}

export default LoginGoogle;