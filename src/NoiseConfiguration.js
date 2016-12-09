import React, { Component } from  'react';

export class NoiseConfiguration extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeDataPoints = this.handleChangeDataPoints.bind(this);
        this.handleChangeLevels = this.handleChangeLevels.bind(this);
        this.state = {
            requestedPoints: props.numberOfPoints,
            requestedLevels: props.numberOfLevels
        }
    }

    handleChangeDataPoints(e) {
        this.setState({ requestedPoints: e.target.value });
    }

    handleChangeLevels(e) {
        this.setState({ requestedLevels: e.target.value });
    }

    handleClick(e) {
        const requestedPoints = this.state.requestedPoints;
        const requestedLevels = this.state.requestedLevels;
        const callback = this.props.updateConfiguration;
        callback(requestedPoints, requestedLevels);
    }

    render() {
        const requestedPoints = this.state.requestedPoints;
        const requestedLevels = this.state.requestedLevels;
        return (
            <div>
                <p>Number of data points: </p>
                <input type="text" value={requestedPoints} onChange={this.handleChangeDataPoints}/>
                <p>Number of layers: </p>
                <input type="text" value={requestedLevels} onChange={this.handleChangeLevels}/>
                <div>
                    <button onClick={this.handleClick}>Update</button>
                </div>
            </div>);
    }
}