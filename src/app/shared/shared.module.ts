import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { WordWrapPipe, RemoveDuplicatePipe } from './pipes';
import { StringPrefixPipe } from './pipes/string-prefix.pipe';
import { FieldErrorMessageComponent } from './components/field-error-message/field-error-message.component';

@NgModule({
  declarations: [
    WordWrapPipe,
    RemoveDuplicatePipe,
    StringPrefixPipe,
    FieldErrorMessageComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    WordWrapPipe,
    RemoveDuplicatePipe,
    FieldErrorMessageComponent,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
