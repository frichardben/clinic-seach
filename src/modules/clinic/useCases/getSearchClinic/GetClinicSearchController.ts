import { Request, Response } from 'express';
import { GetClinicSearchCase } from './GetClinicSearchCase';

export class GetSeachClinicController {
  async handle(request: Request, response: Response) {
    const { name, state, from, to } = request.query;
    const getSearchClinicCase = new GetClinicSearchCase();
    const result = await getSearchClinicCase.execute({
      name: name as string,
      state: state as string,
      availability: {
        from: from as string,
        to: to as string,
      },
    });

    return response.status(200).json(result);
  }
}
