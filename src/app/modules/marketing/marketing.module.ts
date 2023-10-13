import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketingRoutingModule } from './marketing-routing.module';
import { SplashComponent } from './components/splash/splash.component';
import { EffectsModule } from '@ngrx/effects';
import { MarketingEffects } from './store/marketing.effects';
import { StoreModule } from '@ngrx/store';
import * as fromReducer from "./store/marketing.reducer";

@NgModule({
  declarations: [
    SplashComponent
  ],
  imports: [
    CommonModule,
    MarketingRoutingModule,
    StoreModule.forFeature(fromReducer.marketingsFeatureKey, fromReducer.reducer),
    EffectsModule.forFeature([MarketingEffects])
  ]
})
export class MarketingModule { }
