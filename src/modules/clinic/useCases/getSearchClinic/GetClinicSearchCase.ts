import { IClinic } from '@modules/clinic/model';
import { ClinicServices } from '../../services/ClinicServices';

export class GetClinicSearchCase {
  async execute({ name, state, availability: { from, to } }: IClinic) {
    let searchedClinics = await ClinicServices.get();

    if (name) {
      searchedClinics = searchedClinics.filter((clinic) =>
        clinic.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    if (state) {
      searchedClinics = searchedClinics.filter((clinic) =>
        clinic.state.toLowerCase().includes(state.toLowerCase())
      );
    }
    if (from && to) {
      searchedClinics = searchedClinics.filter(
        (clinic) =>
          clinic.availability.from <= from && clinic.availability.to >= to
      );
    }

    return searchedClinics;
  }
}
