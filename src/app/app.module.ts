import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ClarityModule } from 'clarity-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PageNotFoundComponent } from 'app/page-not-found.component';
import { ScreenService } from './shared/screen.service';
import { ScreenBelowLargeDirective } from './shared/directives/screen-below-large.directive';
import { ScreenLargeDirective } from './shared/directives/screen-large.directive';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ScreenBelowLargeDirective,
    ScreenLargeDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    ClarityModule.forRoot()
  ],
  providers: [ScreenService],
  bootstrap: [AppComponent],
  exports: [ScreenLargeDirective, ScreenBelowLargeDirective]
})
export class AppModule { }
