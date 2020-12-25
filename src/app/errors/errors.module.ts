import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotfoundComponent } from './notfound/notfound.component';
import { InternalComponent } from './internal/internal.component';

@NgModule({
  declarations: [NotfoundComponent, InternalComponent],
  exports: [NotfoundComponent, InternalComponent],
  imports: [CommonModule],
})
export class ErrorsModule {}
