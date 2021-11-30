import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgParticlesModule } from 'ng-particles';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductHeroComponent } from './product-list/product-hero/product-hero.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { DialogDataExampleDialog, ReviewComponent } from './product-details/Review/review.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductHeroComponent,
    ReviewComponent,
    DialogDataExampleDialog
  ],
  imports: [
    MatDialogModule,

    CommonModule,
    ProductRoutingModule,
    SharedModule,
    MatExpansionModule,
    NgParticlesModule,
    NgxSkeletonLoaderModule
  ]
})
export class ProductModule {}
