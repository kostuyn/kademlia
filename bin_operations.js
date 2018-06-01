const crypto = require('crypto');
const bitwise = require('bitwise');

exports.getBinHash = (data) => {
	const hash = getHash(data);
	const buffer = Buffer.from(hash, 'hex');

	return bitwise.buffer.read(buffer);
};

exports.getBinDistance = (binHash1, binHash2) => {
	return bitwise.bits.xor(binHash1, binHash2);
};

function getHash(data) {
	const generator = crypto.createHash('sha1');
	generator.update(data);
	return generator.digest();
}
