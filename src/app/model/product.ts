import { Category } from "./category";

export class Product{
  id: number;
  title: string;
  price: number;
  description: string;
  picture: string;
  createdAt : Date;
  updatetAt : Date;
  Category : Category;
  
}
