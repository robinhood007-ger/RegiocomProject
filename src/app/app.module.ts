import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeViewComponent } from './welcome-view/welcome-view.component';
import { BarchartViewComponent } from './barchart-view/barchart-view.component';
import { TimerViewComponent } from './timer-view/timer-view.component';
import { BarchartComponent } from './barchart/barchart.component';
import { TimerComponent } from './timer/timer.component';
import { MmssPipe } from './pipes/MMSSPipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeViewComponent,
    BarchartViewComponent,
    TimerViewComponent,
    BarchartComponent,
    TimerComponent,
    MmssPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
