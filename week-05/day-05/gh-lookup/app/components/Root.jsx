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
                </main>
            </section>
        );
    }
}

export default Root;