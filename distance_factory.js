const Distance = require('./distance');

class DistanceFactory {
	constructor(binOperations, step) {
		this._binOperations = binOperations;
    this._step = step;
	}

	create(data1, data2) {
		const binHashData1 = this._binOperations.getBinHash(data1);
		const binHashData2 = this._binOperations.getBinHash(data2);
		const binDistance = this._binOperations.getBinDistance(binHashData1, binHashData2);

		return new Distance(binDistance, this._step);
	}
}

module.exports = DistanceFactory;
