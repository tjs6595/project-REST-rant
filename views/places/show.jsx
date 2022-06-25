const React = require('react');
const places = require('../../models/places.js');
const Def = require('../default.jsx');

function show(data){
    return(
        <Def>
            <main>
                <div className='row'>
                    <div className="col-sm-6">
                        <img src={data.place.pic} alt={data.place.name}></img>
                        <h3>
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                    </div>
                    <div className="col-sm-6">
                        <h2>
                            Description
                        </h2>
                        <h3>
                            {data.place.showEstablished()}
                        </h3>
                        <h4>
                            Serving: {data.place.cuisines}
                        </h4>
                    </div>
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
                </div>
            </main>
        </Def>
    )
};

module.exports = show;