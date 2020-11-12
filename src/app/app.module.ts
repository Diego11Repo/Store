import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { ProductsComponent } from './components/products/products.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { MostLikedComponent } from './components/most-liked/most-liked.component';
import { BooksComponent } from './components/books/books.component';
import { ModalComponent } from './components/modal/modal.component';
import { EditComponent } from './components/edit/edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JumbotronComponent,
    ProductsComponent,
    LoginComponent,
    WelcomeComponent,
    PromotionsComponent,
    MostLikedComponent,
    BooksComponent,
    ModalComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
