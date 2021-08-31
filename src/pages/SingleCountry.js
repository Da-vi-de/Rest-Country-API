import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";


function SingleCountry() {

   const [country, setCountry] = useState([]);

    // This hook is needed so that name can work as a parameter to get the single country
    // when the image in Card component is clicked, see also App and Card components.
    // No possibility to make it work with Context!
    const { name } = useParams();

// Get single country from the API 
useEffect(() => {

    const fetchCountryData = async() => {

        const res = await fetch(
            `https://restcountries.eu/rest/v2/name/${name}`
            );

        const country = await res.json();
        setCountry(country);
  };
     fetchCountryData()
}, [name]); 

    return(
        
            <main className="main-content">

                <div className="back-btn-container">
                    <Link to="/">
                        <button className="back-btn">
                            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                            Back
                        </button>
                    </Link>
                </div>

                {country.map((nation) => {
                    const { alpha2Code, flag, name, 
                            nativeName, population, region, 
                            subregion, capital, topLevelDomain,
                            currencies, languages, borders } = nation

                            return (
                                <div className="detail-container" key={alpha2Code}>

                                    <div className="detail-page-img-position">
                                        <img src={flag}
                                                alt="country" 
                                                className="detail-country-img"/> 
                                    </div>

                                    <article className="detail-info-position">
                                        <h2>{name}</h2> 
                                        <p>Native name: {nativeName}</p>
                                        <p>Population: {population}</p>
                                        <p>Region: {region}</p>
                                        <p>Sub Region: {subregion}</p>
                                        <p>Capital: {capital}</p>
                                    </article>

                                    <div className="extra-detail-position">
                                            <p>Top Level Domain: {topLevelDomain} </p>
                                            <p>Currencies: {currencies[0].name}</p>
                                            <p>Languages: {languages[0].name}</p>
                                    </div>

                                    <div className="border-countries-position">
                                        <p>Border Countries: {borders}</p>
                                        <button className="border-btn">a</button>
                                        <button className="border-btn">b</button>
                                        <button className="border-btn">c</button>
                                    </div>
                                </div>
                            )
                    })}
            </main>
            
  );
};

export default SingleCountry;
