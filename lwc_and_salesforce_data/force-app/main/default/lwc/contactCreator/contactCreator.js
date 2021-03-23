import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact';

export default class ContactCreator extends LightningElement {
    objectApiName = CONTACT_OBJECT;
    fields = [FIRSTNAME_FIELD, LASTNAME_FIELD, EMAIL_FIELD];
    handleSuccess(event) {
        
    }
}