import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './products/product-list.component';

@Component({
  selector: 'pm-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apm-new';
}
