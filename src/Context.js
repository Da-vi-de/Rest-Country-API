
import React, { useState, useEffect } from "react";

// Create context so that it's possible moving data throughout the app
const Context = React.createContext();

// Create state that needs to be exported
function ContextProvider({children}) {

    const [allCountries, setAllCountries] = useState([]);
    
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
            }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context };



