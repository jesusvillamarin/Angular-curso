import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Google maps!';

  constructor() {
    setTimeout( () => {
      alert('Ya cargo la página');
    }, 3000);
  }

  show() {
    alert('Este mensaje es del elemento show');
  }

}
