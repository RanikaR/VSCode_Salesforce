import { LightningElement } from 'lwc';

export default class Controls extends LightningElement {

    factors = [0,2,3,4,5,6];

    handleAdd() {
        console.log("handleAdd event dispatched");
        this.dispatchEvent(new CustomEvent('add'));
    }
    
    handleSubtract() {
        console.log("handleSubtract event dispatched");
        this.dispatchEvent(new CustomEvent('subtract'));
    }
    
    handleMultiply(event) {
        const factor = event.target.dataset.factor;
        console.log("data factor = " + factor);
        console.log("handleMultiple event dispatched");
        this.dispatchEvent(new CustomEvent('multiply', {
            detail:factor
        }));
    }
}