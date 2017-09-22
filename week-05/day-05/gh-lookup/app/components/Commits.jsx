import React from 'react';

class Commits extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="commits">
                <div>
                    <nav>Commits<span> ({this.props.commits.length})</span></nav>
                </div>
                {
                    this.props.commits.map((item) => {
                        return (
                            <div className="single-commit" key={item.sha}>
                                <p className="repo-description">{item.commit.message}</p>
                                <p className="last-modified">
                                    <span>{item.commit.committer.name}</span>
                                    <span> at </span>
                                    <span>{item.commit.committer.date}</span>
                                </p>
                            </div>
                        );
                    })
                }
            </section>
        )
    }
}

export default Commits;