export class NoiseGenerator
{
    constructor() {
        this._numberOfDataPoints = 12;
        this._dataPoints = [];
    }

    get numberOfDataPoints() {
        return this._numberOfDataPoints;
    }
    
    set numberOfDataPoints(value) {
        this._numberOfDataPoints = value;
    }

    get dataPoints() {
        return this._dataPoints;
    }

    regenerateDataPoints() {
        this._dataPoints = [];
        for(var i = 0; i < this._numberOfDataPoints; i++)
        {
            this._dataPoints.push(Math.random() * 2 - 1);
        }
    }
}