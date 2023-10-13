
import { Action, ActionReducer, ActionReducerMap } from '@ngrx/store';
import * as fromMarketing from "../modules/marketing/store/marketing.reducer";
import * as fromResidential from "../modules/residential/store/residential.reducer";

export interface RootState {
  marketings: fromMarketing.MarketingState;
  residentials: fromResidential.ResidentialState;
}
export const rootReducers: ActionReducerMap<RootState> = {
  marketings: fromMarketing.reducer,
  residentials: fromResidential.reducer,
};

export function resetMetareducer(reducer: ActionReducer<RootState>) {
    return function(state: RootState, action: Action) {
      if (action.type === '[Global/API] Reset All States') {
        return reducer(undefined, action);
      }
      return reducer(state, action);
    };
  }
