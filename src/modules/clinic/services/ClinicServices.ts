import axios from 'axios';

export class ClinicServices {
  static async get() {
    const dentalClinics = await axios
      .get(
        'https://storage.googleapis.com/scratchpay-code-challenge/dental-clinics.json'
      )
      .then((dentalResponse) => dentalResponse.data);
    const vetClinics = await axios
      .get(
        'https://storage.googleapis.com/scratchpay-code-challenge/vet-clinics.json'
      )
      .then((vetResponse) => vetResponse.data);

    const result = await Promise.all([...dentalClinics, ...vetClinics]);

    const clinics = result.map((clinic) => {
      return {
        name: clinic.name ?? clinic.clinicName,
        state: clinic.stateCode ?? clinic.stateName,
        availability: clinic.availability ?? clinic.opening,
      };
    });

    return clinics;
  }
}
