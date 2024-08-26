import { z } from 'zod';

export const addCarValidationSchema = z.object({
  name: z.string({ required_error: 'Name is required' }),
  brand: z.string({ required_error: 'Brand is required' }),
  description: z.string({ required_error: 'Description is required' }),
  color: z.string({ required_error: 'Color is required' }),
  seats: z.union([z.string(), z.number()], {
    required_error: 'Seats is required',
  }),
  pricePerHour: z.union([z.string(), z.number()], {
    required_error: 'Price is required',
  }),
});

export const bookingValidationSchema =  z.object({
  nid: z.string().optional(),
  passport: z.string().optional(),
  drivingLicense: z.string({ required_error: 'Driving License is required' }).min(1, 'Driving License is required')
})