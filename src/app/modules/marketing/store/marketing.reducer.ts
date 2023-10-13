import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Marketing } from './marketing.model';
import { MarketingActions } from './marketing.actions';

export const marketingsFeatureKey = 'marketings';

export interface MarketingState extends EntityState<Marketing> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Marketing> = createEntityAdapter<Marketing>();

export const initialState: MarketingState = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(MarketingActions.addMarketing,
    (state, action) => adapter.addOne(action.marketing, state)
  ),
  on(MarketingActions.upsertMarketing,
    (state, action) => adapter.upsertOne(action.marketing, state)
  ),
  // on(MarketingActions.addMarketings,
  //   (state, action) => adapter.addMany(action.marketings, state)
  // ),
  // on(MarketingActions.upsertMarketings,
  //   (state, action) => adapter.upsertMany(action.marketings, state)
  // ),
  on(MarketingActions.updateMarketing,
    (state, action) => adapter.updateOne(action.marketing, state)
  ),
  on(MarketingActions.updateMarketings,
    (state, action) => adapter.updateMany(action.marketings, state)
  ),
  on(MarketingActions.deleteMarketing,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(MarketingActions.deleteMarketings,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(MarketingActions.loadMarketings,
    (state, action) => adapter.setAll(action.marketings, state)
  ),
  on(MarketingActions.clearMarketings,
    state => adapter.removeAll(state)
  ),
);

export const marketingsFeature = createFeature({
  name: marketingsFeatureKey,
  reducer,
  extraSelectors: ({ selectMarketingsState }) => ({
    ...adapter.getSelectors(selectMarketingsState)
  }),
});

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = marketingsFeature;
