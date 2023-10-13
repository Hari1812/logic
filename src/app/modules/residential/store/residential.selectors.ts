import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Residential } from './residential.model';
import { ResidentialState } from './residential.reducer';

export const selectResidentialState = createFeatureSelector<ResidentialState>('residentials');

export const selectYourData = createSelector(
  selectResidentialState,
  (state: ResidentialState) => state.residentialList
);

export const selectError = createSelector(
  selectResidentialState,
  (state) => state.error
);
