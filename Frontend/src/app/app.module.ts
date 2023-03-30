import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './Components/Widgets/header/header.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { MovieComponent } from './Components/Pages/movie/movie.component';
import { PaymentComponent } from './Components/Pages/payment/payment.component';
import { SummaryComponent } from './Components/Pages/summary/summary.component';
import { SearchComponent } from './Components/Widgets/search/search.component';
import { TagsComponent } from './Components/Widgets/tags/tags.component';

import { TextInputComponent } from './Components/Widgets/text-input/text-input.component';
import { TitleComponent } from './Components/Widgets/title/title.component';
import { DefaultButtonComponent } from './Components/Widgets/default-button/default-button.component';
import { InputContainerComponent } from './Components/Widgets/input-container/input-container.component';
import { InputValidationComponent } from './Components/Widgets/input-validation/input-validation.component';
import { LoginComponent } from './Components/Pages/login/login.component';
import { CarouselComponent } from './Components/Widgets/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MovieComponent,
    PaymentComponent,
    SummaryComponent,
    SearchComponent,
    TagsComponent,
    LoginComponent,
    TextInputComponent,
    TitleComponent,
    DefaultButtonComponent,
    InputContainerComponent,
    InputValidationComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
