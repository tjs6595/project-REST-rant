const React = require('react');
const Def = require('../default.jsx');

function comment(data){
    return(
        <Def>
            <main>
                <h1>Give us your feedback!</h1>
                {/* <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input className="form-control" id="author" name="author" defaultValue="Anonymous" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Content">Comment</label>
                        <input className="form-control" id="content" name="content" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rating">Rating?</label>
                        <input type="number" className="form-control" id="rating" name="rating" defaultChecked={places.id.rating}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Rant">Rant</label>
                        <input type="checkbox" className="form-control" id="rant" name="rant"/>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Comment" />
                </form> */}
            </main>
        </Def>
    )
};

module.exports = comment;