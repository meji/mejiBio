import React from 'react';
import {NavLink} from 'react-router-dom'

function Header(props) {
    return (
        <div>
            <div className="container">
                <NavLink to="/">
                    Meji
                </NavLink>
                <nav>
                    <ul>
                       <li>
                            <NavLink to="/">
                                About me
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/cv">
                                cv
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects">
                            Projects
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
     );

}

export default Header;