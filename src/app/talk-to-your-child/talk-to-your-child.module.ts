import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalkToYourChildRoutingModule } from './talk-to-your-child-routing.module';
import { TalkToYourChildComponent } from './talk-to-your-child.component';

@NgModule({
  imports: [
    CommonModule,
    TalkToYourChildRoutingModule
  ],
  declarations: [TalkToYourChildComponent]
})
export class TalkToYourChildModule { }
