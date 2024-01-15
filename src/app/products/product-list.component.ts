import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from './product';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star-component/star.component';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ConvertToSpacesPipe,
    StarComponent,
    RouterModule,
    // RouterOutlet,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductService],
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Product list';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';
  subscription: Subscription | undefined;

  private _listFilter = '';
  private _productService = inject(ProductService);

  // constructor(productService: ProductService) {
  //   this._productService = productService;
  // }

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
    this.subscription = this._productService.getProducts().subscribe({
      next: (products) => {
        console.log({ products });
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: (err) => {
        this.errorMessage = err;
        console.log(this.errorMessage);
      },
    });
  }
  onRatingClicked(value: string): void {
    this.pageTitle = 'Product list: ' + value;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
