import React, { Component } from  'react';

export class NoiseDataDisplay extends Component
{   
    render() {
        const dataPoints = this.props.dataPoints;
        if(dataPoints == null) {
            return null;
        }
        return (
            <ul>
                {dataPoints.map((number) => 
                    <li key={number.toString()}>{number}</li>
                )}
            </ul>
        );
    }
}