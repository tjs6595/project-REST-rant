const React = require('react');
const Def = require('./default.jsx');

function error404(){
    return(
        <Def>
            <main>
                <h1>Error 404: PAGE NOT FOUND</h1>
                <p>Oops, sorry we can't find this page!</p>
            </main>
        </Def>
    )
};

module.exports = error404;