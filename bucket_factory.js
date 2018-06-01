const Bucket = require('./bucket');

class BucketFactory {
	constructor(maxContacts) {
    this._maxContacts = maxContacts;
	}

	create() {
		return new Bucket(this._maxContacts);
	}
}

module.exports = BucketFactory;
