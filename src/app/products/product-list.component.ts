import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from './product';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star-component/star.component';

@Component({
  selector: 'pm-products',
  standalone: true,
  imports: [FormsModule, CommonModule, ConvertToSpacesPipe, StarComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product list';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  private _listFilter = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
    console.log('In Setter: ' + value);
  }

  filteredProducts: IProduct[] = [];

  products: IProduct[] = [
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2021',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png',
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDate: 'May 21, 2021',
      description: 'Curved claw steel hammer',
      price: 8.9,
      starRating: 4.8,
      imageUrl: 'assets/images/hammer.png',
    },
  ];

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
    this.listFilter = 'cart';
  }
  onRatingClicked(value: string): void {
    this.pageTitle = 'Product list: ' + value;
  }
}
