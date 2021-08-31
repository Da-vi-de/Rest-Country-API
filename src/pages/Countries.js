import React, { useContext } from "react";
import { Context } from "../Context";

import Card from "../components/Card";
import SearchCountry from "../components/SearchCountry";

function Countries() {

    const { allCountries } = useContext(Context);

    // Context allows to import the state in order to create an instance of the Card component,
    // map through it and pass data to Card component. 
    const countries = allCountries.map((country) => (
        
        <Card key={country.alpha2Code} country= {country} />
     ));

    return(
        <main className="main-content">
            <SearchCountry />
            { countries }
        </main>
    );
};

export default Countries;
