import {User} from './user';
import {Product} from './product';
export class DetailFacture {
  idDetailFacture: number ;
  qte: number ;
  prixTotal: number ;
  pourcentageRemise: number ;
  montantRemise: number ;
  product: Product ;
  user: User ;
}
