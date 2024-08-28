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

export const bookingValidationSchema = z.object({
  nid: z.string().optional(),
  passport: z.string().optional(),
  drivingLicense: z
    .string({ required_error: 'Driving License is required' })
    .min(1, 'Driving License is required'),
});

export const updateProfileValidationSchema = z.object({
  name: z
    .string({ required_error: 'Name  is required' })
    .min(3, 'Name must be at least 3 character'),
  phone: z.string().optional(),
  address: z.string().optional(),
});

export const signUpValidationSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(3, { message: 'Name must be at least 3 character' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Enter valid email'),
  phone: z.string().optional(),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, { message: 'Password must be at least 6 character' }),
  confirmPassword: z
    .string({ required_error: 'Confirm Password is required' })
    .min(6, { message: 'Confirm Password must be at least 6 character' }),
});

export const signInValidationSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email('Enter valid email'),
  password: z.string({ required_error: 'Password is required' }),
});
