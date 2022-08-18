import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponentComponent } from './components/nav-component/nav-component.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AntibioticsComponent } from './components/antibiotics/antibiotics.component';
import { AntiInfectiveAgentComponent } from './components/anti-infective-agent/anti-infective-agent.component';
import { AntipyreticsComponent } from './components/antipyretics/antipyretics.component';
import { AnalgesicsComponent } from './components/analgesics/analgesics.component';
import { BestSellersAndOffersComponent } from './components/best-sellers-and-offers/best-sellers-and-offers.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    HomeComponent,
    AntibioticsComponent,
    AntiInfectiveAgentComponent,
    AntipyreticsComponent,
    AnalgesicsComponent,
    BestSellersAndOffersComponent,
    AdminDashboardComponent,
    CartComponent,
    PaymentComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
