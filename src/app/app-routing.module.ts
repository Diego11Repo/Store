import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginComponent } from './components/login/login.component';
import { MostLikedComponent } from './components/most-liked/most-liked.component';
import { ProductsComponent } from './components/products/products.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'edit',
    component: EditComponent,
  },
  {
    path: 'promotions',
    component: PromotionsComponent,
  },
  {
    path: 'liked',
    component: MostLikedComponent,
  },
  {
    path: 'books',
    component: BooksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
