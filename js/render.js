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
                <Section.Title title={"Who I am"}/>
                <Section.SubTitle title={"Contact"}/>
                <Section.SubTitle title={"Career"}/>
                <Section.Title title={"Software"}/>
                <Section.SubTitle title={"Android"}/>
                <Section.SubTitle title={"Web Application"}/>
                <Section.SubTitle title={"Node.js"}/>
                <Section.SubTitle title={"Atom"}/>
                <Section.SubTitle title={"Linux"}/>
                <Section.SubTitle title={"Shell Script"}/>
            </section>
        )
    }
});

Section.Title = React.createClass({
    render: function () {
        const title = this.props.title;
        return (
            <h2>
                <a className="anchor" href={"#" + title} aria-hidden="true">
                    <span className="octicon octicon-link"></span>
                </a>{title}
            </h2>
        )
    }
});

Section.SubTitle = React.createClass({
    render: function() {
        const title = this.props.title;
        return (
            <h3>
                <a className="anchor" href={"#" + title} aria-hidden="true">
                    <span className="octicon octicon-link"></span>
                </a>{title}
            </h3>
        )
    }
});

Section.List = React.createClass({
    render: function() {

    }
});

Section.List.Item = React.createClass({
    render: function() {

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