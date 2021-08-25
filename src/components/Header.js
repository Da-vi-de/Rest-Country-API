import React from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
    return(
        <header className="hero-container">

            <div className="hero">
                <Link to="/">
                    <h1 className="hero-text">Where in the world?</h1>
                </Link>
                <ThemeSwitcher />
            </div>
       </header>
    );
};

export default Header;