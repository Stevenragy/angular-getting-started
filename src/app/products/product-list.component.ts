import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from './product';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star-component/star.component';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  standalone: true,
  imports: [FormsModule, CommonModule, ConvertToSpacesPipe, StarComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductService],
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product list';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  private _listFilter = '';
  private _productService;

  constructor(productService: ProductService) {
    this._productService = productService;
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
    console.log('In Setter: ' + value);
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((p) =>
      p.productName.toLocaleLowerCase().includes(filterBy)
    );
  }
  toggleImagee(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.products = this._productService.getProducts();
    this.filteredProducts = this.products;
  }
  onRatingClicked(value: string): void {
    this.pageTitle = 'Product list: ' + value;
  }
}
