import React, { useContext } from "react";
import { Context } from "../Context";
import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
    const { darkMode } = useContext(Context);

    return(
        <header className= {darkMode ? "hero-container-dark" : "hero-container"}>

            <div className="hero">
                <h1 className="hero-text">Where in the world?</h1>
                <ThemeSwitcher />
            </div>
       </header>
    );
};

export default Header;