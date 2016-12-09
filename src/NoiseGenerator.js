export class NoiseGenerator
{
    constructor() {
        this._numberOfDataPoints = 12;
        this._dataPoints = [];
        this._range = 100;
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

    get hasDataPoints() {
        return this._dataPoints != null && this._dataPoints.length > 0;
    }

    get range() {
        return this._range;
    }

    valueAt(x, interpolate, level) {
        if(x < 0 || x > this.range - 1)
        {
            return NaN;
        }

        if(level === undefined)
        {
            level = 0;
        }

        if(interpolate === undefined) 
        {
            interpolate = this.cosineInterpolate;
        }

        var mul = Math.pow(2, level);
        x *= mul;

        const modX = (x % this.range) /this.range * (this.numberOfDataPoints - 1);
        const x1 = Math.floor(modX);
        const x2 = Math.ceil(modX);
        var mu = (modX - x1)/1;

        const result = interpolate(this._dataPoints[x1], this._dataPoints[x2], mu);
        return result/mul;
    }

    linearInterpolate(y1, y2, mu) {
        return y1 + (y2 - y1) * mu;
    }

    cosineInterpolate(y1, y2, mu) {
        const mu2 = (1-Math.cos(mu * Math.PI))/2;
        return y1 * (1-mu2) + y2*mu2;
    }

    regenerateDataPoints() {
        this._dataPoints = [];
        for(var i = 0; i < this._numberOfDataPoints; i++)
        {
            this._dataPoints.push(Math.random() * 2 - 1);
        }
    }
}