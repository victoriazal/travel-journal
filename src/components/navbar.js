import React from "react";
import TravelLogo from "../images/Path.png"

export default function NavBar() {
    return (
        <nav>
            <img className="NavBarPic" alt="hello" src={TravelLogo} />
            <p className="NavBarText"> my travel journal.</p>
        </nav>)
}
