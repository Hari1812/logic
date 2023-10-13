import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'residential',
    loadChildren: () => import('../residential/residential.module').then(residential => residential.ResidentialModule)
  },
  {
    path: 'business',
    loadChildren: () => import('../business/business.module').then(business => business.BusinessModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
