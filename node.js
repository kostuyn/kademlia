class Node {
	constructor(bucketFactory) {
		this._bucketFactory = bucketFactory;
		this._buckets = {};
	}

	async addContact(prefix, contact) {
		this._buckets[prefix] = this._buckets[prefix] || this._bucketFactory.create();

		const bucket = this._buckets[prefix];
		await bucket.addContact(contact);
	}

	next() {
		if(this._childNode) {
			this._childNode = new Node(this._bucketFactory);
		}

		return this._childNode;
	}
}

module.exports = Node;
