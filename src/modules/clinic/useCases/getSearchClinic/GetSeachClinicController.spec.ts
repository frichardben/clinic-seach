import { GetSeachClinicController } from './GetClinicSearchController';
import { Request, Response } from 'express';
import { GetClinicSearchCase } from './GetClinicSearchCase';

describe('GetSeachClinicController', () => {
  let getSearchClinicController: GetSeachClinicController;
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      json: jest.fn().mockReturnThis(),
      status: jest.fn().mockReturnThis(),
    };
    getSearchClinicController = new GetSeachClinicController();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });


  it('should filter clinics by name', async () => {
    const mockExecute = jest
      .spyOn(GetClinicSearchCase.prototype, 'execute')
      .mockResolvedValue([
        {
          name: 'A1 Dental Clinic',
          state: 'CA',
          availability: { from: '08:00', to: '17:00' },
        },
      ]);
    mockRequest.query = { name: 'a1 dental clinic' };
    await getSearchClinicController.handle(
      mockRequest as Request,
      mockResponse as Response
    );
    expect(mockExecute).toHaveBeenCalledWith({
      name: 'a1 dental clinic',
      state: undefined,
      availability: { from: undefined, to: undefined },
    });
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith([
      {
        name: 'A1 Dental Clinic',
        state: 'CA',
        availability: { from: '08:00', to: '17:00' },
      },
    ]);
  });

  it('should filter clinics by state', async () => {
    const mockExecute = jest
      .spyOn(GetClinicSearchCase.prototype, 'execute')
      .mockResolvedValue([
        {
          name: 'Clinic B',
          state: 'NY',
          availability: { from: '09:00', to: '18:00' },
        },
      ]);
    mockRequest.query = { state: 'ny' };
    await getSearchClinicController.handle(
      mockRequest as Request,
      mockResponse as Response
    );
    expect(mockExecute).toHaveBeenCalledWith({
      name: undefined,
      state: 'ny',
      availability: { from: undefined, to: undefined },
    });
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith([
      {
        name: 'Mira Clinic',
        state: 'NY',
        availability: { from: '09:00', to: '18:00' },
      },
    ]);
  });

  it('should filter clinics by availability', async () => {
    const mockExecute = jest
      .spyOn(GetClinicSearchCase.prototype, 'execute')
      .mockResolvedValue([
        {
          name: 'Clinic C',
          state: 'TX',
          availability: { from: '10:00', to: '19:00' },
        },
      ]);
    mockRequest.query = { from: '09:30', to: '18:30' };
    await getSearchClinicController.handle(
      mockRequest as Request,
      mockResponse as Response
    );
    expect(mockExecute).toHaveBeenCalledWith({
      name: undefined,
      state: undefined,
      availability: { from: '09:30', to: '18:30' },
    });
  });
});
