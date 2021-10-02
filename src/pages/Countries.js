import React, { useContext, useState } from "react";
import { Context } from "../Context";

import Card from "../components/Card";
import SearchFilterCountry from "../components/SearchFilterCountry";

function Countries() {
    const { allCountries, 
            query, 
            filterData,
            darkMode 
          } = useContext(Context);

    const [search] = useState(["name"]);
    const [visibleCards, setVisibleCards] = useState(49);
   
    const showMoreCountries = () => {
        setVisibleCards (prevVisibleCards => prevVisibleCards + 49)
    };

    const handleScroll = () => {
        window.scrollTo({behavior: 'smooth', top: 0 })
    }

    const countries = allCountries.slice(0, visibleCards).filter((item) => {
       if (item.region === filterData) {
        return search.some((newItem) => {
            return (
                item[newItem].toString().toLowerCase()
                             .indexOf(query.toLowerCase()) > -1
            );
        });
     } else if (filterData === "All") {
         return search.some((newItem) => {
            return (
                item[newItem].toString().toLowerCase()
                             .indexOf(query.toLowerCase()) > -1 
            );
         });
     }
     return false
   }).map((country) => (
        <Card key={country.alpha2Code} country= {country} />
     ));

    return (
        <>
        <main className="main-content">
             <SearchFilterCountry />
             <section className="cards-container">
                { countries }
            </section>
            
            <div className="place-load-more-btn">
            
                <button className= {`
                                    ${countries.length !== allCountries.length ? "load-more-btn" : "hide"}
                                    ${darkMode ? "load-more-btn-dark" : "load-more-btn"}
                                   `}
                        onClick={showMoreCountries}
                >
                Load More
               </button> 
           </div>
        </main>

        <div onClick={handleScroll}
             className="top"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6"><path d="M12 6H0l6-6z"/></svg>
            <span className="screen-reader-text">Back to top</span>
        </div>
     </>
    );
};

export default Countries;