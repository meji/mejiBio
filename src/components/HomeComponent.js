import React, { Component } from 'react';
import Contact from './ContactComponent'


function Hero (bio) {
    return(
        <div>
            <p>Name {bio.name}</p>
            <p><img src={bio.pic} alt={bio.name} title={bio.name}/></p>
            <p>{bio.bio}</p>
        </div>
    )
}

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Hero/>
                <Contact/>
            </>
        );
    }
}

export default Home;