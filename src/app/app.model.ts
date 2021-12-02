import { publishFacade } from '@angular/compiler/src/jit_compiler_facade';

export class Incined {
  constructor(
    public detailsOfPersonAffected?: DetailsOfPersonAffected,
    public detailsOfReportingPerson?: DetailsOfReportingPerson,
    public detailsOfIncident?: DetailsOfIncident,
    public additionalDetails?: AdditionalDetails,
    public witness?: Witness[]
  ) {}
}

export class DetailsOfPersonAffected {
  constructor(public whoAffected?: string, public basicInfo?: BasicInfo) {}
}

export class DetailsOfReportingPerson {
  constructor(public basicInfo?: BasicInfo) {}
}

export class DetailsOfIncident {
  constructor(
    public dateTimeOfIncident?: string,
    public howIncidentHappen?: string,
    public whatFirstAidProvided?: string,
    public whoProvidedFirstAid?: string,
    public isInjuredPersonGoHospital?: string, // ddl => yes or no
    public details?: string,
    public placeOfIncident?: string,
    public incidentDetails?: string,
    public consumedFoodItems?: string,
    public wasFirstAidProvided?: string, // ddl => yes or no
    public seekMedicalAttention?: string, // ddl => yes or no
    public seekMedicalAttentionDetails?: string,
    public symptoms?: string, //ddl => Vomiting, Diarrhoea, Nauses, Stomach Cramps, other
    public symptomsDescription?: string,
    public dateTimeOfSymptomsBegan?: string,
    public foodOrDrinkConsumedInLast48Hr?: string,
    public isCustomerInjured?: string // ddl => yes or no
  ) {}
}

export class Witness {
  constructor(
    public firstName?: string,
    public lastName?: string,
    public phNo?: string,
    public emailId?: string
  ) {}
}

export class AdditionalDetails {
  constructor(
    public isEmployeeAbleToWork?: string, //ddl => yes or no
    public whereDidEmployeeGo?: string,
    public doseAnyoneNeedToContacted?: string,
    public isOtherInfoNecessaryForInvestigation?: string,
    public howManyFoodItemsConsumed?: string,
    public totalCoverOnThatDay?: string,
    public isHeadOfficeInformed?: string, //ddl => yes or no
    public whatAreItemsConsumed?: string,
    public dataTimeOfDelivery?: string,
    public howManyItemSoldThatDay?: string,
    public batchDate?: string,
    public expiryDate?: string,
    public isRestBatchDiscarded?: string, //ddl => yes or no
    public actionTakenToPreventReoccurrence?: string
  ) {}
}

export class BasicInfo {
  constructor(
    public firstName?: string,
    public lastName?: string,
    public dob?: string,
    public phNo?: string,
    public emailId?: string,
    public address?: string,
    public city?: string,
    public postcode?: string,
    public occupation?: string
  ) {}
}
