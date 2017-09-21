import React from 'react';

import root from '../style/root.scss';

class Root extends React.Component {
    render() {
        return (
            <section className="container">
                <header>
                    <nav><a href="">GitHub</a></nav>
                    <nav><a href="">MDN</a></nav>
                    <nav><a href="">Stack Overflow</a></nav>
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
                                <nav>TEACHING-MATERIALS</nav>
                            </div>
                            <p className="repo-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <p className="last-modified">
                                <span>Last modified at </span>
                                <span id="update-time">2017-09-22T02:38:50Z</span>
                            </p>
                        </section>
                        <section className="auth">
                            <p>Authenticate</p>
                            <input type="text" placeholder="Username" />
                            <input type="password" placeholder="Token or password" />
                            <button>Login</button>
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