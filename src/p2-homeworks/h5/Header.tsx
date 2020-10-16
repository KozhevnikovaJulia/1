import React from "react";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div>
            <div>
                <NavLink to="/junior" >Junior</NavLink>
            </div>
            <div>
                <NavLink to="/preJunior" >PreJunior</NavLink>
            </div>

        </div>
    );
}

export default Header;
