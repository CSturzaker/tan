import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TalkToYourChildComponent } from './talk-to-your-child.component';

const routes: Routes = [
  {
    path: '', component: TalkToYourChildComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalkToYourChildRoutingModule { }
