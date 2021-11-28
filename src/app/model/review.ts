import { User } from './user';
import { Product } from './product';

export class Review {
  id: number;
  rating: number;
  description: string;
  user: User;
  product: Product;
}
