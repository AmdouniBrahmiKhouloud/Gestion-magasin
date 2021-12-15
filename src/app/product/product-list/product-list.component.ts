import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PromotionService } from '../../services/promotion.service';
import { Promotion } from '../../model/promotion';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'll-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  isLoaded: boolean;
  advanceSearchExpanded = false;
  promotions = [];
  newprise: number ;

  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;
  searchText: string ;
  constructor(private promotionService: PromotionService) {
  }

  ngOnInit(): void {



    setTimeout(() => {
      // @ts-ignore
      this.promotionService.getListPromotion().subscribe((data: Promotion[]) => console.log(this.promotions = data));
      this.isLoaded = true;
    }, 1000);

  }


  exportPdf(): void {

    const doc = new jsPDF();

    const columns = [['name', 'description', 'pourcentage' , 'dateBegin' , 'endate' , 'Product']];
    const data = [] ;
    this.promotions.forEach((item) => {
       data.push([item.name, item.description, item.pourcentage, item.dateBegin , item.endate , item.produit.libelle ]) ;
    }) ;



    autoTable(doc, {
      head: columns,
      body: data,
      didDrawPage: (dataArg) => {
        doc.text('list Promotion', dataArg.settings.margin.left, 12);
      }
    });

    doc.save('Promotions.pdf') ;
  }

}
