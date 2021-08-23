import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
    return(
        <header className="hero-container">

            <div className="hero">

                <h1 className="hero-text">Where in the world?</h1>
                <ThemeSwitcher />
            </div>
       </header>
    );
};

export default Header;