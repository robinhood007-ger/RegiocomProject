import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeViewComponent } from './welcome-view/welcome-view.component';
import { BarchartViewComponent } from './barchart-view/barchart-view.component';
import { TimerViewComponent } from './timer-view/timer-view.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'welcome', component:WelcomeViewComponent},
    {path: '', pathMatch: 'full', redirectTo: 'welcome'},
    {path: 'barchart', component:BarchartViewComponent},
    {path: 'timer', component:TimerViewComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
