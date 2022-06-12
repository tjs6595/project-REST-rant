const React = require('react');
const Def = require('./default.jsx');

function home(){
    return(
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img src="/images/Pepperoni Pizza.jpg" alt="Pepperoni Pizza"/>
                    <div>
                        Photo by <a href="https://unsplash.com/@alanaktion?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alan Hardman</a> on <a href="https://unsplash.com/s/photos/pizza-free-images?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
};

module.exports = home;