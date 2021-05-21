import { LightningElement, api } from 'lwc';

export default class DisplayPanel extends LightningElement {
    @api errors;
    @api notes;
    // ay other implementations you may want to expose here
}