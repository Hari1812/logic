import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvComponent } from './components/subscriptions/tv/tv.component';

const routes: Routes = [
  { path: 'tv', component: TvComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentialRoutingModule { }
