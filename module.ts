import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPasswordToggleDirective } from './directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxPasswordToggleDirective
  ],
  exports : [
    NgxPasswordToggleDirective
  ]
})
export class NgxPasswordToggleModule { }
