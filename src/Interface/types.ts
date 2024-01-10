import { ISelectService } from "./booking";

export interface IAccordionItem {
  id: number;
  isOpen: boolean;
  title: string;
  imgUrl: any;
  contents: any;
}

export interface ILaundryProduct {
  service: any;
  grandPrice: number;
  isDelivered: boolean;
  isApproved: boolean;
  _id?: string;
  category: "men" | "woman" | "home";
  name: string;
  price: number;
  services?: ISelectService;
  quntity?: number;
}
