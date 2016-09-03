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
    ],
    career: [
        {
            link: "https://www.behance.net/kenju",
            content: "Freelance 2011 April ~ 2015 March"
        },
        {
            link : "https://life-is-tech.com/",
            content: "Life is Tech! 2013 March ~ 2015 March"
        },
        {
            link: "http://recruit-tech.co.jp/",
            content: "Recruit Technologies Co.,Ltd. 2015 April ~ Current"
        }
    ],
    android: [
        {
            link: "https://play.google.com/store/apps/details?id=io.github.kenju.picktap",
            content: "Picktap - HackerNews Reader"
        },
        {
            link: "https://play.google.com/store/apps/details?id=io.github.kenju.android_qr_wifi_manager",
            content: "SSID Manager"
        }
    ],
    webApplication: [
        {
            link: "https://github.com/KENJU/websocket_materialdesign",
            content: "WebSocket Chat"
        },
        {
            link: "http://kenju.github.io/spa_line/line",
            content: "LINE with SPA Architecture"
        },
        {
            link: "http://kenju.github.io/leancanvas/",
            content: "Lean Canvas Online"
        },
        {
            link: "http://kenju.github.io/learnJavaMobile/",
            content: "Learn Java Mobile"
        }
    ],
    nodejs: [
        {
            link: "https://github.com/kenju/instagram_js_filter",
            content: "Instagram JS Filter"
        },
        {
            link: "https://github.com/KENJU/design_patterns_js",
            content: "Design Patterns JS"
        }
    ],
    atom: [
        {
            link: "https://github.com/KENJU/simplewordcount",
            content: "Simple Word Count"
        }
    ],
    linux: [
        {
            link: "https://github.com/kenju/lpic",
            content: "Basic Tutorial for LPIC"
        }
    ],
    shellScript: [
        {
            link: "https://github.com/kenju/shellscript_todo",
            content: "shellscript_todo"
        },
        {
            link: "https://github.com/kenju/ghmaster",
            content: "ghmaster"
        },
        {
            link: "https://github.com/KENJU/tools",
            content: "shelscript utilities"
        },
        {
            link: "https://github.com/KENJU/mdhelper",
            content: "mdhelper"
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
                <h1>Kenju Wagatsuma</h1>
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
                <Section.List section={"career"}/>
                <Section.Title title={"Software"}/>
                <Section.SubTitle title={"Android"}/>
                <Section.List section={"android"}/>
                <Section.SubTitle title={"Web Application"}/>
                <Section.List section={"webApplication"}/>
                <Section.SubTitle title={"Node.js"}/>
                <Section.List section={"nodejs"}/>
                <Section.SubTitle title={"Atom"}/>
                <Section.List section={"atom"}/>
                <Section.SubTitle title={"Linux"}/>
                <Section.List section={"linux"}/>
                <Section.SubTitle title={"Shell Script"}/>
                <Section.List section={"shellScript"}/>
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
                    <span className="octicon octicon-link"/>
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
                    <span className="octicon octicon-link"/>
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
                <a href={this.props.link} target="_blank">
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