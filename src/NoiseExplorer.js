import React, { Component } from  'react';
import { NoiseConfiguration } from './NoiseConfiguration.js';
import { NoisePlot } from './NoisePlot.js';

export class NoiseExplorer extends Component {
    constructor(props) {
        super(props);
        this.updateConfiguration = this.updateConfiguration.bind(this);

        const noiseGenerator = this.props.noiseGenerator;
        this.state = {
            numberOfPoints: noiseGenerator.numberOfDataPoints,
            numberOfLevels: 4
        };
    }

    updateConfiguration(layers, levels) {
        this.setState({ numberOfLevels: levels })
        const noiseGenerator = this.props.noiseGenerator;
        noiseGenerator.numberOfDataPoints = layers;
        noiseGenerator.regenerateDataPoints();
    }

    render() {
        const noiseGenerator = this.props.noiseGenerator;
        const numberOfPoints = noiseGenerator.numberOfDataPoints;
        const numberOfLevels = this.state.numberOfLevels;
        return (
            <div>
                <p className="strong">Noise Explorer</p>
                <NoiseConfiguration numberOfPoints={numberOfPoints}
                                    numberOfLevels={numberOfLevels}
                                    updateConfiguration={this.updateConfiguration}/>
                <NoisePlot noiseGenerator={noiseGenerator}
                           numberOfLevels={numberOfLevels}/>
            </div>);
    }
}