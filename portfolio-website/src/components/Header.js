import React from "react";
import Typed from "react-typed";


const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>shebin scaria</h1>
                <Typed
                    className="typed-text"
                    strings={["Machine Learning", "Computer Vision", "Algorithms", "Databases"]}
                    loop
                />
                <a href="#" className="btn-main-offer">Contact me</a>
            </div>

        </div>
    )
}

export default Header;

