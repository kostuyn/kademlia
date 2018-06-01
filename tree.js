class Tree {
	constructor(node, distanceFactory, clientId, log) {
		this._rootNode = node;
		this._distanceFactory = distanceFactory;

		this._clientId = clientId;
		this._log = log;
	}

	async addContact(contact) {
		let currentNode = this._rootNode;
		const distance = this._distanceFactory.create(this._clientId, contact.id);

		while(distance.next()) {
			currentNode = currentNode.next();
		}

		await currentNode.addContact(distance.prefix, contact);
	}
}

module.exports = Tree;
