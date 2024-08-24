export type TCar = {
  _id: string;
  name: string;
  description: string;
  images: Array<string>;
  color: string;
  isElectric: boolean;
  seats: number;
  brand: string;
  status?: 'available' | 'unavailable';
  features: Array<string>;
  pricePerHour: number;
  isDeleted?: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
