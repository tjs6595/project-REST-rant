const React = require('react');
const Def = require('../default.jsx');

function show(data){
    return(
        <Def>
            <main>
                <h1>{data.place.name}</h1>
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
            <h4>Currently Unrated</h4>
        </Def>
    )
};

module.exports = show;