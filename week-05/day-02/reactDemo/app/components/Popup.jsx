import React from 'react';

class Popup extends React.Component {
    constructor(props) {
        super();
        
    }

    /* componentWillReceiveProps(nextProp) {
        this.setState({
            hoverState: nextProps.hoverState
        });
    } */

    render() {
        return (
            <div className={this.props.hoverId  === this.props.index ? 'popup display-block' : 'popup'}>
                <span>{this.props.name}</span>
            </div>
        )
    }
}

export default Popup;