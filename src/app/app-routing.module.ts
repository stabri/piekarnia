import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {OfferComponent} from "./offer/offer.component";
import {ContactComponent} from "./contact/contact.component";
import {CompanyComponent} from "./company/company.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'oferta', component: OfferComponent},
  {path: 'kontakt', component: ContactComponent},
  {path: 'ofirmie', component: CompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
