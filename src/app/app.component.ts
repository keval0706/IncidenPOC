import { Component, OnInit, VERSION } from '@angular/core';
import {
  AdditionalDetails,
  BasicInfo,
  DetailsOfIncident,
  DetailsOfPersonAffected,
  DetailsOfReportingPerson,
  Incined,
  Witness,
} from './app.model';

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
    this.incidentObj.detailsOfPersonAffected = new DetailsOfPersonAffected();
    this.incidentObj.detailsOfPersonAffected.basicInfo = new BasicInfo();
    this.incidentObj.detailsOfReportingPerson = new DetailsOfReportingPerson();
    this.incidentObj.detailsOfReportingPerson.basicInfo = new BasicInfo();
    this.incidentObj.detailsOfIncident = new DetailsOfIncident();
    this.incidentObj.additionalDetails = new AdditionalDetails();
    this.incidentObj.witness = new Array<Witness>();
    console.log(this.incidentObj);
  }
}
