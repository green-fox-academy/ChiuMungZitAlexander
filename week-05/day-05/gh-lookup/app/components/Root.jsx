import React from 'react';
import Commits from './Commits.jsx';

import server from '../../server/server.js';
import root from '../style/root.scss';

import loading from '../img/loading.png'

var userStorage = localStorage;

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repoQuery: null,
            repoInfo: {
                name: null,
                description: null,
                pushed_at: null
            },
            name: null,
            token: null,
            login: false,
            loading: false,
            commits: [],
            recommendedList: []
        }
    }
    componentWillMount() {
        if (!!userStorage.username && !!userStorage.token) {
            this.setState({
                loading: true
            });
            fetch(server.defaultRepo, {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'Authorization': 'Basic ' + userStorage.token
                }
            }).
                then((response) => {
                    response.json().
                        then((data) => {
                            this.setState({
                                repoInfo: {
                                    name: data.name,
                                    description: data.description,
                                    pushed_at: data.pushed_at
                                },
                                loading: false
                            });
                            this.queryRecommended();
                        });
                });
        } else {
            console.log('No authentication or limit up! Login first!');
        }
    }
    componentDidMount() {
        if (!userStorage.username || !userStorage.token) {
            this.setState({
                login: false
            });
        } else {
            this.setState({
                login: true
            });
        }
    }
    handleQueryChange(e) {
        e.persist();
        this.setState({
            repoQuery: e.target.value
        });
    }
    queryRepo() {
        if (!this.state.repoQuery) {
            console.log('Please enter a repository name!');
            return;
        } else {
            if (!!userStorage.username && !!userStorage.token) {
                this.setState({
                    loading: true
                });
                fetch(server.repoInfo + this.state.repoQuery, {
                    method: 'GET',
                    headers: {
                        'accept': 'application/json',
                        'Authorization': 'Basic ' + userStorage.token
                    }
                }).
                    then((response) => {
                        response.json().
                            then((data) => {
                                this.setState({
                                    repoInfo: {
                                        name: data.name,
                                        description: data.description,
                                        pushed_at: data.pushed_at
                                    },
                                    loading: false
                                });
                            });
                    });
            } else {
                console.log('No authentication or limit up! Login first!');
            }
        }
    }
    authenticate() {
        let base64Token = btoa(this.state.name + ':' + this.state.token);
        this.setState({
            loading: true
        });
        fetch(server.limitRate, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Authorization': 'Basic ' + base64Token
            }
        }).then((response) => {
            if (response.status === 401) {
                console.log('Wrong username or token!');
            } else if (response.status !== 401 && response.status !== 200) {
                console.log('Unknown error! Please retry!');
            } else if (response.status === 200) {
                userStorage.setItem('username', this.state.name);
                userStorage.setItem('token', base64Token);
                this.setState({
                    login: true,
                    loading: false
                });
            }
        }).catch((err) => {
            console.log(err);
            this.setState({
                loading: false
            });
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
    queryRecommended() {
        if (!!userStorage.username && !!userStorage.token) {
            this.setState({
                loading: true
            });
            fetch(server.queryRecommended, {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'Authorization': 'Basic ' + userStorage.token
                }
            }).
                then((response) => {
                    response.json().
                        then((data) => {
                            this.setState({
                                recommendedList: data.items,
                                loading: false
                            });
                        });
                });
        } else {
            console.log('No authentication or limit up! Login first!');
        }
    }
    handleRecommendedClick(name) {
        if (!!userStorage.username && !!userStorage.token) {
            this.setState({
                loading: true
            });
            fetch(server.listCommits + name + '/commits', {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'Authorization': 'Basic ' + userStorage.token
                }
            }).
                then((response) => {
                    response.json().
                        then((data) => {
                            this.setState({
                                commits: data.slice(0, 20),
                                loading: false
                            });
                        });
                });
        } else {
            console.log('No authentication or limit up! Login first!');
        }
    }
    render() {
        let that = this;
        const login = that.state.login;

        let div = null;
        if (login) {
            div = <div>
                <p>Welcome!</p>
                <p>{userStorage.username}</p>
            </div>
        } else {
            div = <div>
                <div>
                    <p>Authenticate</p>
                    <input type="text" id="username" placeholder="Username"
                        onChange={that.handleNameChange.bind(this)} />
                    <input type="password" id="password" placeholder="Token or password"
                        onChange={that.handlePasswordChange.bind(this)} />
                    <button onClick={that.authenticate.bind(this)}>Login</button>
                </div>
            </div>
        }
        return (
            <section className="container">
                <div className={"mask " + (this.state.loading ? 'show' : 'hidden')}>
                    <img src={loading} alt="" />
                </div>
                <header>
                    <nav><a target="_blank" href="https://github.com/">GitHub</a></nav>
                    <nav><a target="_blank" href="https://developer.mozilla.org/en-US/#">MDN</a></nav>
                    <nav><a target="_blank" href="https://stackoverflow.com/">Stack Overflow</a></nav>
                </header>
                <main>
                    <div className="searchBox">
                        <label htmlFor="">greenfox-academy/</label>
                        <input type="text" placeholder="repository name"
                            onChange={that.handleQueryChange.bind(this)} />
                        <button onClick={that.queryRepo.bind(this)}>Go</button>
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
                        <section className="auth" id="auth">
                            {div}
                        </section>
                    </div>
                    <div className="row">
                        <Commits commits={that.state.commits}/>
                        <section className="recommended">
                            <p>Recommended</p>
                            {
                                this.state.recommendedList.map((item) => {
                                    return (
                                        <p key={item.name}
                                            onClick={() => { that.handleRecommendedClick(item.name) }}>{item.name}</p>
                                    );
                                })
                            }
                        </section>
                    </div>
                </main>
            </section>
        );
    }
}

export default Root;