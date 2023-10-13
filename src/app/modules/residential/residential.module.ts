import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentialRoutingModule } from './residential-routing.module';
import { TvComponent } from './components/subscriptions/tv/tv.component';
import { EffectsModule } from '@ngrx/effects';
import { ResidentialEffects } from './store/residential.effects';
import { StoreModule } from '@ngrx/store';
import * as fromReducer from './store/residential.reducer';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
  
    TvComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ResidentialRoutingModule,
    StoreModule.forFeature(fromReducer.residentialsFeatureKey, fromReducer.reducer),
    EffectsModule.forFeature([ResidentialEffects])
  ]
})
export class ResidentialModule { }
