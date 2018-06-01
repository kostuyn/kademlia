const crypto = require('crypto');
const bitwise = require('bitwise');

class _hash_depricated {
	constructor(data) {
		this._data = data;
	}

	getBinHash() {
		if(this._binHash) {
			return this._binHash;
		}

		const hash = this._getHash();
		const buffer = Buffer.from(hash, 'hex');

		this._binHash = bitwise.buffer.read(buffer);

		return this._binHash;
	}

	_getHash() {
		const generator = crypto.createHash('sha1');
		generator.update(this._data);
		return generator.digest();
	}
}

module.exports = _hash_depricated;
