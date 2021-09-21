import React, { useContext } from "react";
import { Context } from "../Context";

import Card from "../components/Card";
import SearchFilterCountry from "../components/SearchFilterCountry";

function Countries() {

    const { allCountries, query, search, filter } = useContext(Context);

    const countries = allCountries.filter((item) => {

        if (item.region === filter) {
        return search.some((newItem) => {
            return (
                item[newItem].toString().toLowerCase()
                             .indexOf(query.toLowerCase()) > -1
            );
        });
     } else if (filter === "All") {
         return search.some((newItem) => {
            return (
                item[newItem].toString().toLowerCase()
                             .indexOf(query.toLowerCase()) > -1
            );
         })
     }
    }).map((country) => (
        <Card key={country.alpha2Code} country= {country} />
     ));

    return (
        <main className="main-content">
             <SearchFilterCountry />
            { countries }
        </main>
    );
};

export default Countries;
