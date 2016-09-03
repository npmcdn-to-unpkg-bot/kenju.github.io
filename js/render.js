/**
 * renderer.js
 */

var rootItems = {
    contact: [
        {
            link: "https://speakerdeck.com/kenju",
            content: "Speakerdeck"
        },
        {
            link: "http://www.slideshare.net/kenjuwagatsuma",
            content: "SlideShare"
        },
        {
            link: "https://twitter.com/kenjuwagatsuma",
            content: "Twitter"
        },
        {
            link: "https://www.wantedly.com/users/699166",
            content: "Wantedly"
        },
        {
            link: "https://www.linkedin.com/in/kenju",
            content: "LinkedIn"
        },
        {
            link: "https://medium.com/@kenjuwagatsuma",
            content: "Tech Blog in English"
        },
        {
            link: "https://qiita.com/kenju",
            content: "Tech Blog in Japanese"
        },
        {
            link: "https://kenju.github.io/blog",
            content: "General Blog in English"
        }
    ]
};

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
                <Section.List section={"contact"}/>
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
    render: function () {
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
    render: function () {
        var section = this.props.section;
        var items = rootItems[section];
        var rows = [];
        items.forEach(function (item) {
            rows.push(<Section.List.Item
                link={item.link}
                content={item.content}
                key={"key-" + item.content}/>);
        });
        return (
            <ul>
                {rows}
            </ul>
        );
    }
});

Section.List.Item = React.createClass({
    render: function () {
        return (
            <li>
                <a href={this.props.link}>
                    {this.props.content}
                </a>
            </li>
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