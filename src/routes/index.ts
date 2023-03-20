import { Router } from 'express';
import { clinicRouter } from './clinic.route';

const routes = Router();

routes.use('/api/v1/clinics', clinicRouter);

export { routes };
