import React from 'react';

import server from '../../server/server.js'

import root from '../style/root.scss';

var userStorage = localStorage;

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repoInfo: {
                name: null,
                description: null,
                pushed_at: null
            },
            name: null,
            token: null,
            login: false
        }
    }
    componentWillMount() {
        /* fetch(server.repoInfo + 'ChiuMungZitAlexander').
            then((response) => {
                response.json().
                    then((data) => {
                        this.setState({
                            repoInfo: {
                                name: data.name,
                                description: data.description,
                                pushed_at: data.pushed_at
                            }
                        });
                    });
            }); */
    }
    componentDidMount() {
        if (!userStorage.username && !userStorage.token) {
            this.setState({
                login: true
            });
        }
    }
    authenticate() {
        let base64Token = btoa(this.state.name + ':' + this.state.token);
        /* userStorage.setItem('username', this.state.name);
        userStorage.setItem('token', btoa(base64Token)); */
        fetch(server.limitRate, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Authorization': 'Basic ' + 'base64Token'
            }
        }).then((response) => {
            if (response.status === 401) {
                console.log('Wrong username or token!');
            } else if (response.status === 200) {
                userStorage.setItem('username', this.state.name);
                userStorage.setItem('token', btoa(base64Token));
            }
        }).catch((err) => {
            console.log(err);
        });
    }
    handleNameChange(e) {
        e.persist();
        this.setState({
            name: e.target.value
        });
    }
    handlePasswordChange(e) {
        e.persist();
        this.setState({
            token: e.target.value
        });
    }
    render() {
        let that = this;
        return (
            <section className="container">
                <header>
                    <nav><a target="_blank" href="https://github.com/">GitHub</a></nav>
                    <nav><a target="_blank" href="https://developer.mozilla.org/en-US/#">MDN</a></nav>
                    <nav><a target="_blank" href="https://stackoverflow.com/">Stack Overflow</a></nav>
                </header>
                <main>
                    <div className="searchBox">
                        <label htmlFor="">greenfox-academy/</label>
                        <input type="text" placeholder="repository name" />
                        <button>Go</button>
                    </div>
                    <div className="row">
                        <section className="repo-info">
                            <div>
                                <nav>{this.state.repoInfo.name}</nav>
                            </div>
                            <p className="repo-description">{this.state.repoInfo.description}</p>
                            <p className="last-modified">
                                <span>Last modified at </span>
                                <span id="update-time">{this.state.repoInfo.pushed_at}</span>
                            </p>
                        </section>
                        <section className="auth">
                            <p>Authenticate</p>
                            <input type="text" id="username" placeholder="Username"
                                onChange={that.handleNameChange.bind(this)} />
                            <input type="password" id="password" placeholder="Token or password"
                                onChange={that.handlePasswordChange.bind(this)} />
                            <button onClick={that.authenticate.bind(this)}>Login</button>
                        </section>
                    </div>
                    <div className="row">
                        <section className="commits">
                            <div>
                                <nav>Commits<span> (2750)</span></nav>
                            </div>
                            <div className="single-commit">
                                <p className="repo-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <p className="last-modified">
                                    <span>Alexander</span>
                                    <span> at </span>
                                    <span>2017-09-22T02:38:50Z</span>
                                </p>
                            </div>
                        </section>
                        <section className="recommended">
                            <p>Recommended</p>
                        </section>
                    </div>
                </main>
            </section>
        );
    }
}

export default Root;