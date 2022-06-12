const React = require('react');
const Def = require('../default.jsx');

function index(data){
    let placesFormatted = data.places.map((place) => {
        return(
            <div className="col-sm-6">
                <h2>{place.name}</h2>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name}></img>
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
                <a href="places">
                    <button className="btn-index">Place Details Page</button>
                </a>
            </div>
        )
    });
    return(
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div className="row">
                    {placesFormatted} 
                </div>
                <a href="/places/new">
                    <button className="btn-new">Add New Place</button>
                </a>
            </main>
        </Def>
    )
};

module.exports = index;