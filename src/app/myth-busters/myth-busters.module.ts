import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MythBustersRoutingModule } from './myth-busters-routing.module';
import { MythBustersComponent } from './myth-busters.component';

@NgModule({
  imports: [
    CommonModule,
    MythBustersRoutingModule
  ],
  declarations: [MythBustersComponent]
})
export class MythBustersModule { }
