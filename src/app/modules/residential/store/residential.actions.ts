import { createAction, emptyProps, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Residential } from './residential.model';

export const addResidential = createAction(
  '[Residentials/API] add Residentials'
);
export const loadResidential = createAction(
  '[Residentials/API] Load Residentials',
  props<{ residential: any }>()
);

export const loadDataFailure = createAction(
  '[Residential] Load Data Failure', 
  props<{ error: string }>()
  );