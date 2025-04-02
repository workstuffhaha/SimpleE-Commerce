import { Component, signal, inject } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

// a directive does not have a visual part and it needs to be connected to a component 
// for you to do anything.

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  standalone: true,
  template: `
    <div class=" bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center"> 
      <button class="text-xl" routerLink="/">My store</button>
      <app-primary-button 
        [label]="'Cart(' + cartService.cart().length + ')'" 
        routerLink="/cart"
      />
    </div>
  `,
  styles: `
    
  `
})
export class HeaderComponent {

  cartService = inject(CartService);
}
