import React, { useContext, useEffect } from "react";
import { Context } from "../Context";

function ThemeSwitcher() {
    const { darkMode, setDarkMode } = useContext(Context);

    const handleTheme = () => {
        setDarkMode(!darkMode);
    };
    
    useEffect(() => {
      if (darkMode) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }, [darkMode]); 

    return(
        <button className={`dark-mode-btn ${darkMode ? "text-for-dark-mode" : "dark-mode-text "}`}
                aria-label="Light mode / Dark mode"
                onClick={handleTheme}
        >
            {darkMode ?
                <i className="fa fa-sun-o theme-switch" aria-hidden="true"></i> 
                :
                <i className="fa fa-moon-o theme-switch" aria-hidden="true"></i>
            }
           
            Dark Mode
        </button>
    );
};

export default ThemeSwitcher;