import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Residential } from './residential.model';
import * as ResidentialAction  from './residential.actions';

export const residentialsFeatureKey = 'residentials';

export interface ResidentialState extends EntityState<Residential> {
  // additional entities state properties
  residentialList: any,
  error: string | null;
}

export const adapter: EntityAdapter<Residential> = createEntityAdapter<Residential>();

export const initialState: ResidentialState = adapter.getInitialState({
  // additional entity state properties
  residentialList: {} as any,
  error: null,
});

export const reducer = createReducer(
  initialState,

  on(ResidentialAction.loadResidential,
    (state, { residential }) => ({
      ...state, residentialList: residential
    })
  ),
  on(ResidentialAction.loadDataFailure, 
    (state, { error }) => ({
       ...state, loading: false, error 
      })
    )
  // on(ResidentialActions.clearResidentials,
  //   state => adapter.removeAll(state)
  // ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
}  = adapter.getSelectors();
