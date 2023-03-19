import { api } from '@modules/clinic/api';

export class ClinicServices {
  static async get() {
    const dentalClinics = await api
      .get('dental-clinics.json')
      .then((dentalResponse) => dentalResponse.data);
    const vetClinics = await api
      .get('vet-clinics.json')
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
