import { IService } from "./service";
import { ILaundryProduct } from "./types";
import { IUser } from "./user";

export interface IBookingService {
  service: string | IService;
  cleaningProduct: string | ILaundryProduct;
  cleaningProductItem: number;
}

export interface IBookingForm {
  deliveryDate: Date;
  pickupDate: Date;
  address: string;
  email: string;
  phoneNumber: string;
}

export interface ISelectService {
  service?: string;
  title: string;
}

export interface IBooking {
  user?: string | IUser;
  services: IBookingService[];
  grandPrice: number;
  pickupDate: Date;
  deliveryDate: Date;
  address: string;
}

export interface IBookingResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: {
    user: string;
    services: {
      service: string;
      cleaningProduct: string;
      cleaningProductItem: number;
      _id: string;
    }[];
    grandPrice: number;
    pickupDate: Date;
    deliveryDate: Date;
    address: string;
    isApproved: boolean;
    isDelivered: boolean;
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    id: string;
  };
}
