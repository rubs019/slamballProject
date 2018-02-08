import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Slamball';
  count:string;

  constructor() {
    setInterval(() => {
      let countDownDate = new Date("Mar 5, 2018 15:37:25").getTime();

      let now = new Date().getTime();

      // Find the distance between now an the count down date
      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.count = days + "d " + hours + "h " + minutes + "m " + seconds + "s "
    }, 1000)
  }
}
