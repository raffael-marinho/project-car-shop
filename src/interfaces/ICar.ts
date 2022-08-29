import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const carSchema = VehicleZodSchema.extend({
  doorsQty: z.number().gte(2).lte(4),
  seatsQty: z.number().gte(2).lte(7),
});

type ICar = z.infer<typeof carSchema>;

export { ICar, carSchema };