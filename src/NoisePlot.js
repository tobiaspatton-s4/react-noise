import React, { Component } from 'react';
import rd3 from 'rd3';

export class NoisePlot extends Component {
    render() {
        const noiseGenerator = this.props.noiseGenerator;

        if (noiseGenerator === null || !noiseGenerator.hasDataPoints) {
            return null;
        }

        var LineChart = rd3.LineChart
        const range = Array(noiseGenerator.range).fill();
        var lineData = [];

        for (var l = 0; l < this.props.numberOfLevels; l++) {
            var series = {
                name: 'L' + (l + 1),
                values: range.map((d, i) => {
                    return { 
                        x: i, 
                        y: noiseGenerator.valueAt(i, noiseGenerator.cosineInterpolate, l) 
                    };
                }),
                strokeWidth: 1
            };
            lineData.push(series);
        }

        var combined = {
            name: "All",
            values: range.map((d, i) => {
                return {x: i, y: lineData.reduce((a, v) => {
                    return a + v.values[i].y;
                }, 0)}
            }),
            strokeWidth: 2
        };

        lineData.unshift(combined);

        return (
            <LineChart
                legend={true}
                data={lineData}
                width="100%"
                height={600}
                circleRadius={0}
                viewBoxObject={{
                    x: 0,
                    y: 0,
                    width: 500,
                    height: 400
                }}
                title="Line Chart"
                domain={{ x: [0, noiseGenerator.range - 1], y: [-1.1, 1.1] }}
                gridHorizontal={true}
                />
        );
    }
}