import { IService } from "./service";
import { ILaundryProduct } from "./types";
import { IUser } from "./user";

export interface IBookingService {
  service: string | IService;
  cleaningProduct: string | ILaundryProduct;
  cleaningProductItem: number;
}

export interface IBooking {
  user?: string | IUser;
  services: IBookingService[];
  grandPrice: number;
  bookingDate: Date;
  deliveryDate: Date;
  address: string;
}
