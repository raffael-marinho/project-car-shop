import { z } from 'zod';

const VehicleZodSchema = z.object({
  model: z.string()
    .min(3, { message: 'Model must be 3 or more character long' }),
  year: z.number().min(1900, { message: 'Year must be higher than 1900' })
    .max(2022, 'Year must be lower than 2022'),
  color: z.string()
    .min(3, { message: 'Color must be 3 or more character long' }),
  status: z.boolean().optional(),
  buyValue: z.number().int(),
});

type IVehicle = z.infer<typeof VehicleZodSchema>;

export { VehicleZodSchema, IVehicle };