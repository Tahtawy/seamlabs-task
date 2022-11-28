import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-field-error-message',
  templateUrl: './field-error-message.component.html',
  styleUrls: ['./field-error-message.component.scss'],
})
export class FieldErrorMessageComponent {
  @Input() message: string = '';
}
