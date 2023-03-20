export interface Availability {
  from: string;
  to: string;
}

export interface IClinic {
  name?: string;
  state?: string;
  availability?: Availability;
}

export interface ISeachClinic extends IClinic {
  clinicName: string;
  stateCode: string;
  stateName: string;
  opening: string;
}
