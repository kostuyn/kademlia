class Bucket {
  constructor(maxContacts) {
    this._maxContacts = maxContacts;
    this._contacts = [];
  }

  async addContact(contact) {
    if(this._contacts.length < this._maxContacts) {
      this._contacts.push(contact);
      return;
    }

    const lastAvailableContact = this._contacts.shift();
    const isAvailable = await lastAvailableContact.ping();
    if(isAvailable) {
      this._contacts.push(lastAvailableContact);
      return;
    }

    this._contacts.push(contact);
  }
}

module.exports = Bucket;
