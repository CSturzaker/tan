import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MythBustersComponent } from './myth-busters.component';

const routes: Routes = [
  {
    path: '', component: MythBustersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MythBustersRoutingModule { }
