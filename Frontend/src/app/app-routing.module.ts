import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { HomeComponent } from './Components/Pages/home/home.component';
import { LoginComponent } from './Components/Pages/login/login.component';
import { MovieComponent } from './Components/Pages/movie/movie.component';
import { PaymentComponent } from './Components/Pages/payment/payment.component';
import { SummaryComponent } from './Components/Pages/summary/summary.component';

const routes: Routes = [
  //{ path: '', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'movie/:id', component: MovieComponent },
  //{ path: 'login', component: LoginComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'summary', component: SummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
