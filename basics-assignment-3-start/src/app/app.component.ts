import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecretPassword = false;
  buttonClickLog = []; 

  toggleSecretPassword() {
    this.showSecretPassword = !this.showSecretPassword
    this.buttonClickLog.push(new Date());
  }
}
