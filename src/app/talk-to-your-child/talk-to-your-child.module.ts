import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalkToYourChildRoutingModule } from './talk-to-your-child-routing.module';
import { TalkToYourChildComponent } from './talk-to-your-child.component';
import { DrinkingChartComponent } from './drinking-chart/drinking-chart.component';
import { FeelingChartComponent } from './feeling-chart/feeling-chart.component';

@NgModule({
  imports: [
    CommonModule,
    TalkToYourChildRoutingModule
  ],
  declarations: [TalkToYourChildComponent, DrinkingChartComponent, FeelingChartComponent]
})
export class TalkToYourChildModule { }
