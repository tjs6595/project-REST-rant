const React = require('react');
const Def = require('./default.jsx');

function error404(){
    return(
        <Def>
            <main>
                <h1>Error 404: PAGE NOT FOUND</h1>
                <p>Oops, sorry we can't find this page!</p>
                <div>
                    <img src="/images/Scary Fox.jpg" alt="Scary Fox"/>
                    <div>
                        Photo by <a href="https://unsplash.com/@gerandeklerk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Geran de Klerk</a> on <a href="https://unsplash.com/s/photos/free-animal-golden-retriever?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
};

module.exports = error404;