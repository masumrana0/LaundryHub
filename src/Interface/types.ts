export type ICloth = {
  _id: string;
  category: "men" | "woman" | "home";
  name: string;
  price: number;
};

export interface AccordionItem {
  id: number;
  isOpen: boolean;
  title: string;
  imgUrl: string;
  contents: any;
}
