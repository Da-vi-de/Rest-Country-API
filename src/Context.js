
import React, { useState, useEffect } from "react";

// Create context so that it's possible moving data throughout the app
const Context = React.createContext();

function ContextProvider({children}) {
    
    // Only state that needs to be exported because is used in more components
    const [allCountries, setAllCountries] = useState([]);
    const [query, setQuery] = useState("");
    const [filterData, setFilterData] = useState("All");
    const [darkMode, setDarkMode] = useState(false);
    
    const urlAllCountries = 'https://restcountries.com/v2/all';

 // Get all the countries from the API
    useEffect(() => {
        const fetchAllCountriesData = async () => {

            try {
                const res = await fetch(urlAllCountries);

                const allCountries = await res.json();
                setAllCountries(allCountries);

                } catch(err) {
                    alert('Problem getting countries');
            };
        };
       
       fetchAllCountriesData()
    }, []);
 
    return(
        <Context.Provider value={{
            allCountries,
            query,
            setQuery,
            filterData,
            setFilterData,
            darkMode,
            setDarkMode
            }}
            >
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context };