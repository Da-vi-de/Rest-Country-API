import React from "react";
import { Link } from "react-router-dom";

function CountryDetail() {
    
    return(
        <>
            <div className="back-btn-container">
                <Link to="/">
                    <button className="back-btn">
                        <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                        Back
                    </button>
                </Link>
            </div>

            <div className="detail-container">

            <div className="detail-page-img-position">
                <img src= ""
                        alt="country" 
                        className="detail-country-img"/> 
            </div>

            <article className="detail-info-position">
                <h2></h2> 
                <p>Native name: </p>
                <p>Population: </p>
                <p>Region: </p>
                <p>Sub Region: </p>
                <p>Capital: js code</p>
            </article>

            <div className="extra-detail-position">
                    <p>Top Level Domain: </p>
                    <p>Currencies: </p>
                    <p>Languages: </p>
            </div>

            <div className="border-countries-position">
                <p>Border Countries:</p>
                <button className="border-btn"></button>
                <button className="border-btn"></button>
                <button className="border-btn"></button>
            </div>
        </div>
     </>
    );
};

export default CountryDetail;