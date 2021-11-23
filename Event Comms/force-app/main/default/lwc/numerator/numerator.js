import { LightningElement, api } from 'lwc';

export default class Numerator extends LightningElement {

    // @api counter = 0;
    _currentCount = 0;
    priorCount = 0;
    @api
    get counter() {
        return this._currentCount;
    }
    set counter(value) {
        this.priorCount = this._currentCount;
        this._currentCount = value;
    }

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

    @api maximizeCounter() {
        this.counter += 1000000;
    }
}