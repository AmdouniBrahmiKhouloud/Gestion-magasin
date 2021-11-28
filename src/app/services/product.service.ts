import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Fournisseur } from '../model/fournisseur';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = environment.url + 'produit/';
  constructor(private http: HttpClient) {}
  getListProduct() {
    return this.http.get<Product[]>(this.url + 'retrieve-all-produits');
  }

  addProduct(product: Product) {
    return this.http.post(this.url, product);
  }

  deleteProduct(id: string) {
    return this.http.delete(this.url + id);
  }
  updateProduct(product: Product) {
    return this.http.put(this.url + product.id, product);
  }
}
