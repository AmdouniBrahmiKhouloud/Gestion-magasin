import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule} from '@angular/material/expansion';
import { NgParticlesModule } from 'ng-particles';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductHeroComponent } from './product-list/product-hero/product-hero.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PromotionListComponent } from './promotion-list/promotion-list.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PromotionFormComponent } from './promotion-form/promotion-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatisticsComponent } from './statistics/statistics.component';
import { NgChartsModule } from 'ng2-charts';
import { UpdatePromotionFormComponent } from './update-promotion-form/update-promotion-form.component';

@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent, ProductHeroComponent, PromotionListComponent, PromotionComponent, PromotionFormComponent, StatisticsComponent, UpdatePromotionFormComponent],
  exports: [
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    MatExpansionModule,
    NgParticlesModule,
    NgxSkeletonLoaderModule,
    ReactiveFormsModule,
    NgChartsModule,
    FormsModule
  ]
})
export class ProductModule { }
