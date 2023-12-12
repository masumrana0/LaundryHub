export interface IAccordionItem {
  id: number;
  isOpen: boolean;
  title: string;
  imgUrl: any;
  contents: any;
}

// export interface ILaundryProduct {
//   userId?: string;
//   service: {
//     service: string;
//     laundryProduct: {
//       category: "men" | "woman" | "home";
//       name: string;
//       price: number;
//     };
//     laundryProductItem: number;
//   }[];
//   grandPrice: number;
//   orderDate?: string;
//   isDeliveried?: boolean;
// }

export interface ILaundryProduct {
  _id?: string;
  category: "men" | "woman" | "home";
  name: string;
  price: number;
  service?: string;
  quntity?: number;
}
