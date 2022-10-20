import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CASA DE CAMBIOS "UCB"';
  bol = 50;
  cambiar(){
    const bol = this.bol/6.96;
    return bol;
  }
}


