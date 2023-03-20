import { GetSeachClinicController } from '@modules/clinic/useCases/getSearchClinic/GetClinicSearchController';
import { Router } from 'express';

const clinicRouter = Router();

const getSearchClinicController = new GetSeachClinicController();

clinicRouter.get('/search', getSearchClinicController.handle);

export { clinicRouter };
