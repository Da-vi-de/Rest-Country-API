import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({children}) {
    const [allCountries, setAllCountries] = useState([]);

    const url = 'https://restcountries.eu/rest/v2/all';

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllCountries(data))
    }, []);
    console.log(allCountries);

    return(
        <Context.Provider value={{
            allCountries
            }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context };