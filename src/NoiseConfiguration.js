import React, { Component } from  'react';

export class NoiseConfiguration extends Component {    
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            requestedPoints: props.numberOfPoints
        }
    }

    handleChange(e) {
        this.setState({requestedPoints: e.target.value});
    }

    handleClick(e) {
        const requestedPoints = this.state.requestedPoints;
        const callback = this.props.updateNumberOfPoints;
        callback(requestedPoints);
    }

    render() {
        const requestedPoints = this.state.requestedPoints;
        return (
        <div>
            <p className="strong">Configuration</p>
            <p>Number of data points:</p>
            <input type="text" value={requestedPoints} onChange={this.handleChange}/>
            <button onClick={this.handleClick}>Update</button>
        </div>);
    }
}