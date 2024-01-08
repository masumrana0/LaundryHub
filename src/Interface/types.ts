import { ISelectService } from "./booking";

export interface IAccordionItem {
  id: number;
  isOpen: boolean;
  title: string;
  imgUrl: any;
  contents: any;
}

export interface ILaundryProduct {
  _id?: string;
  category: "men" | "woman" | "home";
  name: string;
  price: number;
  service?: ISelectService;
  quntity?: number;
}
