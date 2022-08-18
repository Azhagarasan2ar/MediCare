import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AnalgesicsComponent } from './components/analgesics/analgesics.component';
import { AntiInfectiveAgentComponent } from './components/anti-infective-agent/anti-infective-agent.component';
import { AntibioticsComponent } from './components/antibiotics/antibiotics.component';
import { AntipyreticsComponent } from './components/antipyretics/antipyretics.component';
import { BestSellersAndOffersComponent } from './components/best-sellers-and-offers/best-sellers-and-offers.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
 
  {"path":"",component:BestSellersAndOffersComponent},
  {"path":"antibiotics",component:AntibioticsComponent},
  {"path":"antipyretics",component:AntipyreticsComponent},
  {"path":"anti-infective-agents",component:AntiInfectiveAgentComponent},
  {"path":"analgesics",component:AnalgesicsComponent},
  {"path":"admin",component:AdminDashboardComponent},
  {"path":"cart",component:CartComponent},
  {"path":"search",component:SearchComponent},
  {"path":"payment",component:PaymentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
