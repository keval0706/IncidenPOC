export class Incined {
  public detailsOfPersonAffected: DetailsOfPersonAffected;
  public detailsOfReportingPerson: DetailsOfReportingPerson;
  public detailsOfIncident: DetailsOfIncident;
}

export class DetailsOfPersonAffected {
  public whoAffected: string;
  public basicInfo: BasicInfo;
}

export class DetailsOfReportingPerson {
  public basicInfo: BasicInfo;
}

export class DetailsOfIncident {
  public dateTimeOfIncident: string;
  public howIncidentHappen: string;
  public whatFirstAidProvided: string;
  public whoProvidedFirstAid: string;
  public isInjuredPersonGoHospital: string;
  public details: string;
}

export class BasicInfo {
  public firstName: string;
  public lastName: string;
  public dob: string;
  public phNo: string;
  public emailId: string;
  public address: string;
  public city: string;
  public postcode: string;
  public occupation: string;
}
