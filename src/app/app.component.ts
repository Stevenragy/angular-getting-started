import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductListComponent } from './products/product-list.component';
import { HttpClientModule } from '@angular/common/http';

// handling mouse event using rxjs
// const mouseMove$ = fromEvent<MouseEvent>(document, 'mousemove');

// const lastMouseMovement = mouseMove$.pipe(throttleTime(1000));

// lastMouseMovement.subscribe((event) => {
//   console.log(`Mouse Position: X: ${event.clientX}, Y: ${event.clientY}`);
// });

@Component({
  selector: 'pm-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ProductListComponent,
    HttpClientModule,
    RouterModule,
  ],
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand">{{ pageTitle }}</a>
      <ul class="nav nav-pills">
        <li><a class="nav-link" routerLink="/welcome">Home</a></li>
        <li><a class="nav-link" routerLink="/products">Product List</a></li>
      </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  pageTitle = 'Acme Product';
}
