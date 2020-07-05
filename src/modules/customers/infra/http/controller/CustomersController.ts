import { Request, Response } from 'express';

import CreateCustomerService from '@modules/customers/services/CreateCustomerService';

import { container } from 'tsyringe';

export default class CustomersController {
  public async create(request: Request, response: Response): Promise<Response> {
    // TODO
    const { email, name } = request.body;

    const customersCreate = container.resolve(CreateCustomerService);

    const customers = await customersCreate.execute({
      email,
      name,
    });

    return response.status(204).json(customers);
  }
}
