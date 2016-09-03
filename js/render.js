/**
 * renderer.js
 */

var Root = React.createClass({
    render: function () {
        return (
            <div className="wrapper">
                <Header/>
                <Section/>
                <Footer/>
            </div>
        )
    }
});

var Header = React.createClass({
    render: function () {
        return (
            <header>
                <h1>Kenju</h1>
                <p>Application Enginner</p>
                <p className="view">
                    Welcome to My <a href="https://github.com/kenju">GitHub Profile :)</a>
                </p>
            </header>
        )
    }
});

var Section = React.createClass({
    render: function () {
        return (
            <section>

            </section>
        )
    }
});

var Footer = React.createClass({
    render: function () {
        return (
            <footer>
                <img src="img/nyan.gif" alt="nyan"/>
            </footer>
        )
    }
});

ReactDOM.render(
    <Root/>,
    document.getElementById('container')
);