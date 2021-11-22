import { LightningElement, api } from 'lwc';

export default class Numerator extends LightningElement {

    @api counter = 0;
    
    handleIncrement() {
        console.log("Add clicked");
        this.counter++;
    }

    handleDecrement(){
        console.log("Subtract clicked");
        this.counter--;
    }

    handleMultiply(event) {
        const factor = event.detail;
        this.counter *= factor;
    }
}