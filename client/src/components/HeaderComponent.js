import React from 'react';

function Header(props) {
    return (
        <header id="header">
            <span id="menu-icon">
                <div></div>
            </span>
            <nav>
                <ul className="no-style">
                    <li><a href="/">Home</a></li>
                    <li><a href="cv">Curriculum</a></li>
                    <li><a href="projects">Projects</a></li>
                </ul>
            </nav>
        </header>
     );

}

export default Header;
