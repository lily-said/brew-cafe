import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Menu } from './menu/menu';
import { Cart } from './cart/cart';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'menu', component: Menu},
    {path: 'cart', component: Cart},
    {path: '**', component: NotFound},
];
