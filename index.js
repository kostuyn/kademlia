const crypto = require('crypto');
const bitwise = require('bitwise');

const uuid = require('node-uuid').v4;
const Tree = require('./tree');

const BucketFactory = require('./bucket_factory');
const Node = require('./node');
const DistanceFactory = require('./distance_factory');
const Contact = require('./contact');

const binOperations = require('./bin_operations');

(async () => {
	const log = console;
	const clientId = uuid();
	const step = 2;
	const maxContacts = 10;

	const bucketFactory = new BucketFactory(maxContacts);
	const distanceFactory = new DistanceFactory(binOperations, step);
	const rootNode = new Node(bucketFactory);
	const tree = new Tree(rootNode, distanceFactory, clientId, log);

	for(let i = 0; i < 53; i++) {
	  const contact = new Contact(log);
		await tree.addContact(contact);
	}
})();


// const hash = sha1('helll1pploo23');
const hash = Buffer.from('0af4c61ddcc5e8a2dabede0f3b482cd9aea9434d', 'hex');
console.log('hash:', hash);

const binHash = bitwise.buffer.read(hash);
console.log('binHash:', binHash.slice(0, 16));


const root = {};
let currentNode = {};

const step = 2;
const mask = Array(step).fill(1);

console.log('mask:', mask);

for(let i = 0; i < binHash.length; i += step) {
	const isNode = check(mask, step, i, binHash);
	if(!isNode) {
		console.log('finish!');
		// addLeaf()
		break;
	}

	// nextNode();
	console.log('continue!');
}


function sha1(data) {
	const generator = crypto.createHash('sha1');
	generator.update(data);
	return generator.digest();
}

function check(mask, step, offset, binHash) {
	console.log('offset:', offset);

	const binBlock = binHash.slice(offset, offset + step);
	console.log('binBlock:', binBlock);

	const result = bitwise.bits.nand(binBlock, mask);
	console.log('result:', result);

	return bitwise.bits.reduceAnd(result);
}

