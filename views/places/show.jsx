const React = require('react');
const places = require('../../models/places.js');
const Def = require('../default.jsx');

function show(data){
    return(
        <Def>
            <main>
                <h2 href={`/places/${data.id}`}>
                    {data.place.name}
                </h2>
                <img href={`/places/${data.id}`} src={data.place.pic} alt={data.place.name}></img>
                <h2 href={`/places/${data.id}`}>{data.place.city}</h2>
                <h2 href={`/places/${data.id}`}>{data.place.state}</h2>
                <h2 href={`/places/${data.id}`}>{data.place.cuisines}</h2>
                <div>
                    <h2>Ratings</h2>
                    <p>Currently Unrated</p>
                </div>
                <div>
                    <h2>Comments</h2>
                    <p>No comments yet!</p>
                </div>
                <div>
                    <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                        Edit
                    </a>
                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">
                            DELETE
                        </button>
                    </form>
                </div>
            </main>
        </Def>
    )
};

module.exports = show;