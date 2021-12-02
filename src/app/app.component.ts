import { Component, OnInit, VERSION } from '@angular/core';
import { Incined } from './app.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  incidentObj: Incined;

  ngOnInit() {
    this.incidentObj = new Incined();
    console.log(this.incidentObj);
  }
}
