import { TCar } from "./car.type";
import { TUser } from "./user.type";

export type TBooking = {
    _id:string;
    user: TUser;
    car: TCar;
    startTime: string;
    endTime: string;
    pricePerHour:number
    totalCost: number;
    isBooked: 'confirmed' | 'unconfirmed';
    status:'pending'|'approved'|'canceled';
    bookerInfo:{
      name:string,
      nid:string,
      passport:string,
      drivingLicense:string
    }
    additionalOption:string,
    isPaid:boolean,
    isReturned:boolean,
    isReviewed:boolean
  };
  
  export type TBookingRequest = {
    email: string;
    carId: string;
    date: string;
    startTime: string;
  };