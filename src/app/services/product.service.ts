import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Fournisseur } from '../model/fournisseur';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = environment.url + 'produit/';
  constructor(private http: HttpClient) {}
  getListProduct() : Observable<Product[]> {
    return this.http.get<Product[]>(this.url + 'retrieve-all-produits');
    
  }

  addProduct(product: Product) : Observable<Object> {
  
    return this.http.post(this.url + 'add-produit', product);
  }

  deleteProduct(id: number) {
  
    return this.http.delete(this.url + 'remove-produit/' + id);
  }
  updateProduct(product: Product) {
    
    return this.http.put(this.url + 'modify-produit/', product);
  }
  
  
  getProduct(id:number) : Observable<Product> {
    return this.http.get<Product>(this.url + 'retrieve-produit/' + id);
    
  }

}
