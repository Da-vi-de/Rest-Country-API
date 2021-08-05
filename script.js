const button = document.querySelector('#button');
const dropdownMenu = document.querySelector('#dropdown');
const countriesContainer = document.querySelector('.js-countries-container');
const countriesDetails = document.querySelector('.js-country-details');

button.addEventListener('click', function(e) {
    e.preventDefault();

    dropdownMenu.classList.toggle('hide');

});


const showCountry = async function() {
    try {
    // Loading countries
     const res = await  fetch(
         'https://restcountries.eu/rest/v2/all'
         );

         const data = await res.json();

        console.log(res, data);

    // 2) Rendering countries

    // Thanks to template literals it's possible to embed expressions!
    // If you check the console you can see arrays packed with data
    // we need to loop the array and get the data we want, that's it! Very
    // simple and clean way to render external data.

    // The process is: Do html and a bit of css first, then leave the parent
    // in there and bring everything else in here, insertAdjacentHTML
    // build the DOM. afterbegin means after the beginning of the parent.
    // We need also join method because what we have here it's an array of strings
    // We need one big string.
    const markupAllCountries = `

        ${data.map(d => {
            return `

                <div class="country-cards-container">

                    <div class="country-grid-desktop">

                        <div class="country-card">

                            <div class="country-detail">
                                <a class="image" href="./detail.html" 
                                rel="noopener noreferrer" 
                                aria-label="It goes to detail page"
                                >
                                <img src="${d.flag}" alt="Chosen country flag">  
                                </a>
                            </div>

                            <div class="country-info">

                                <div class="country-detail">

                                <div class="country-title">
                                    <h2>${d.name}</h2>   
                                </div>

                                <p>Population: ${d.population}<p>
                                <p>Region: ${d.region}</p>
                                <p>Capital: ${d.capital}</p>
                                </div>
                             </div>
                          </div>
                        </div>
                     </div> `  
                    }).join('')}`;

        countriesContainer.insertAdjacentHTML('afterbegin', markupAllCountries);

  /*  const markupDetails = `
        
        ${data.map(d => {
            return `

            <div class="detail-container">

            <div class="detail-page-img-position">
                <img src="${d.flag}" 
                     alt="country image" 
                     class="detail-country-img">  Js code goes in src attribute 
            </div>
 
            <article class="detail-info-position">
                <h2>${d.name}</h2> 
                <p>Native name: ${d.nativeName}</p>
                <p>Population: ${d.population}</p>
                <p>Region: ${d.region}</p>
                <p>Sub Region: ${d.subregion}</p>
                <p>Capital: ${d.capital}</p>
            </article>
 
            <div class="extra-detail-position">
                 <p>Top Level Domain: ${d.topLevelDomain}</p>
                 <p>Currencies: ${d.currencies}</p>
                 <p>Languages: ${d.languages}</p>
            </div>
 
            <div class="border-countries-position">
                <p>Border Countries:</p>
                <span class="border-btn">${d.borders[0]}</span> 
                <span class="border-btn">${d.borders[1]}</span>  
                <span class="border-btn">${d.borders[2]}</span>  
         </div>
    </div>`

        }).join('')}`;

        countriesDetails.insertAdjacentHTML('afterbegin', markupDetails); */

    } catch(err) {
        alert(err)
    }
};
showCountry();

