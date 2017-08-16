import { Component, EventEmitter, Input, Output } from '@angular/core';

/*
* Show how to get input and trigger output
* */
@Component({
    selector: 'input-field-component',
    templateUrl: './input-field-component.component.html'
})

export class InputFieldComponent {
    @Input() text: string = '';
    @Output() textChange = new EventEmitter();

    constructor() {
    }

    onTextChange(event: any) {
        this.text = event.target.value;

        this.textChange.next(this.text);
    }
}