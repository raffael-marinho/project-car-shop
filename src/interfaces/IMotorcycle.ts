import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const MotorcycleZodSchema = VehicleZodSchema.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().int().min(0).max(2500),
});

export type IMotorcycle = z.infer<typeof MotorcycleZodSchema>;