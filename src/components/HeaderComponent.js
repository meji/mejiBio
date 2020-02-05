import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div class="container">
                    <a id="logo" href="/">MEJI</a>
                    <nav>
                        <ul>
                            <li> <a href="/" title="About">About Me</a></li>
                            <li> <a href="/cv" title="CV">CV</a></li>
                            <li> <a href="/projects" title="Projects">Projects</a></li>

                        </ul>
                    </nav>
                </div>
            </div>
         );
    }
}

export default Header;