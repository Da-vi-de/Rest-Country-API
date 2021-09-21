
import React, { useState, useEffect } from "react";

// Create context so that it's possible moving data throughout the app
const Context = React.createContext();


function ContextProvider({children}) {
    
    // Create state that needs to be exported
    const [allCountries, setAllCountries] = useState([]);
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState("All");
    const [search] = useState(["name"]);
    
    const urlAllCountries = 'https://restcountries.eu/rest/v2/all';

 // Get all the countries from the API for Countries page
    useEffect(() => {
        const fetchAllCountriesData = async () => {

            const res = await fetch(urlAllCountries);
            const allCountries = await res.json();
            setAllCountries(allCountries);
        };
       
       fetchAllCountriesData()
    }, []);
    
    return(
        <Context.Provider value={{
            allCountries,
            query,
            setQuery,
            search,
            filter,
            setFilter
            }}
            >
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context };



