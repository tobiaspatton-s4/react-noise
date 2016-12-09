import React, { Component } from  'react';
import { NoiseConfiguration } from './NoiseConfiguration.js';
import { NoiseDataDisplay } from './NoiseDataDisplay.js';
import { NoisePlot } from './NoisePlot.js';

export class NoiseExplorer extends Component {
    constructor(props) {
        super(props);
        this.updateNumberOfPoints = this.updateNumberOfPoints.bind(this);

        const noiseGenerator = this.props.noiseGenerator; 
        this.state = {
            numberOfPoints: noiseGenerator.numberOfDataPoints
        };
    }

    updateNumberOfPoints(number) {
         this.setState({numberOfPoints: number});
         const noiseGenerator = this.props.noiseGenerator;
         noiseGenerator.numberOfDataPoints = number;
         noiseGenerator.regenerateDataPoints();
    }

    render() {
        const noiseGenerator = this.props.noiseGenerator;
        const dataPoints = noiseGenerator.dataPoints;
        const numberOfPoints = noiseGenerator.numberOfDataPoints;
        return (
        <div>
            <p className="strong">Noise Explorer</p>
            <NoiseConfiguration numberOfPoints={numberOfPoints}
                                updateNumberOfPoints={this.updateNumberOfPoints}/>
            <NoiseDataDisplay dataPoints={dataPoints}/>
            <NoisePlot/>
        </div>);
    }
}