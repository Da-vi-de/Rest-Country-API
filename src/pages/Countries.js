import React, { useContext } from "react";
import { Context } from "../Context";

import Card from "../components/Card";
import SearchCountry from "../components/SearchCountry";

function Countries() {
    const { allCountries } = useContext(Context);

    const countries = allCountries.map((country) => (
        <Card key={country.alpha2Code} country= {country} />
     ))

    return(
        <main className="main-content">
            <SearchCountry />
            {countries}
        </main>
    );
};

export default Countries;