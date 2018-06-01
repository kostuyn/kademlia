class Distance {
	constructor(binDistance, step) {
		this._binDistance = binDistance;
		this._step = step;
	}

	next() {
		const binPrefix = this._binDistance.slice(this._position, this._position + this._step);

		this._position += this._step;

		return binPrefix.join();
	}
}

module.exports = Distance;
