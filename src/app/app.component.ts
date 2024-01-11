import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './products/product-list.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'pm-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductListComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'apm-new';
}
