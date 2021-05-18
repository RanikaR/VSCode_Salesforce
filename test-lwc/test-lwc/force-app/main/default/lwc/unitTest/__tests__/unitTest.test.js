import {createElement} from 'lwc';
import unitTest from 'c/unitTest';

describe('c-unit-text', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while(document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('displays unit status with default unitNumber', () => {
        const element = createElement('c-unit-test', {
            is: UnitTest
        });
        expect(element.unitNumber).toBe(5);
        // Add the element to the jsdom instance
        document.body.appendChild(element);
        // Verify displayed greeting
        const div = clement.shadowRoot.querySelector('div');
        expect(div.textContent).toBe('Unit 5 alive!');
    });
});