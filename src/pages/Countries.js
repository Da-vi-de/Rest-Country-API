import React from "react";
import Card from "../components/Card";
import SearchCountry from "../components/SearchCountry";

function Countries() {
    return(
        <main className="main-content">
            <SearchCountry />
            <Card />
        </main>
    );
};

export default Countries;