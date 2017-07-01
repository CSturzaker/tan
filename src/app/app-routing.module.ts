import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule'},
  { path: 'mythbusters', loadChildren: 'app/myth-busters/myth-busters.module#MythBustersModule' },
  { path: 'talktoyourchildren', loadChildren: 'app/talk-to-your-child/talk-to-your-child.module#TalkToYourChildModule' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
