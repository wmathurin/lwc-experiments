import { LightningElement, track, api } from 'lwc';
export default class ContactList extends LightningElement {
    @api mobilesdk;
	@track contacts;
	@track error;
	connectedCallback() {
        this.loadContacts();
	}
	loadContacts() {
        let soql = 'SELECT Id, Name, Email, MobilePhone, Department FROM Contact LIMIT 100';
        this.mobilesdk.force.query(soql, 
            (result) => {
                this.contacts = result.records;
            },
            (error) => {
                this.error = error;
            }
        );
    }
}