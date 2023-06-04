import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {

  seconds: number = 300
  interval: any

  startTimer() {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.seconds--;
      },1000)
    } else {
      this.seconds = 300
    }
  }
}
