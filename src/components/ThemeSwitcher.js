import React from "react";

function ThemeSwitcher() {
    return(
        <button className="dark-mode-text dark-mode-btn" aria-label="Change theme">
            <i className="fa fa-moon-o theme-switch" aria-hidden="true"></i>
            Dark Mode
        </button>
    );
};

export default ThemeSwitcher;