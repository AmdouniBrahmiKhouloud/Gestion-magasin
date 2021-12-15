import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { productsDB } from 'src/app/shared/data/products';
import { Router } from '@angular/router';
import { Product } from '../../model/product';
import { PromotionService } from '../../services/promotion.service';
import { Promotion } from '../../model/promotion';

@Component({
  selector: 'll-dashboard-saved-item',
  templateUrl: './dashboard-saved-item.component.html',
  styleUrls: ['./dashboard-saved-item.component.scss']
})
export class DashboardSavedItemComponent implements OnInit {
  view = 'list';
  listWithPromtion = [] ;
  list: Promotion[];
  products = [];
  found = false ;
  indexs = [] ;
  constructor(private productService: ProductService , private  route: Router , private promotionSerice: PromotionService) {

  }


  ngOnInit(): void {

  this.promotionSerice.getListPromotion().subscribe((data: Promotion[]) => {
    this.list = data ;
  });
  this.productService.getListProduct().subscribe(
      (d) => {
        const l: any = d ;

        for (let i = 0 ; i < l.length ; i++)
        {
          let found = false ;
          for (let j = 0 ; j < this.list.length ; j++)
          {
            const prom: any = this.list[j].produit ;
            console.log(l[i].idproduit);
            if (l[i].idproduit === prom.idproduit){
              this.listWithPromtion.push(this.list[j]) ;
              console.log(this.list[j]);
              found = true ;
              break ;
            }
          }
          if (!found)
          {
            this.products.push(l[i]) ;
          }

        }




        console.log(this.listWithPromtion) ;
        console.log(this.products) ;

      });
  }

  Add(id: number): void {
    console.log(id);
    this.route.navigate(['/products/form/' + id ]);

  }

  delete(p: Promotion): void {

    console.log(p) ;
    const i = this.list.indexOf(p);

    this.promotionSerice.deletePromotion(p.id).subscribe(() =>  {
      this.listWithPromtion.splice(i, 1 ) ;
      this.products.push(p.produit);
    }  );
  }

  update(id: number): void {
    console.log(id);
    this.route.navigate(['/products/formUpdate/' + id ]);

  }
}
