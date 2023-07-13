import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() detailsProductListComponent: ProductListComponent = undefined

  product: Product

  ngOnInit() {
    this.product = this.detailsProductListComponent.selectedProduct
  }
}
