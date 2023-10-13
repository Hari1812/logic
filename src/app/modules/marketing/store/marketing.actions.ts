import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Marketing } from './marketing.model';

export const MarketingActions = createActionGroup({
  source: 'Marketing/API',
  events: {
    'Load Marketings': props<{ marketings: Marketing[] }>(),
    'Add Marketing': props<{ marketing: Marketing }>(),
    'Upsert Marketing': props<{ marketing: Marketing }>(),
    'Add Marketings': props<{ marketing: Marketing[] }>(),
    'Upsert Marketings': props<{ marketing: Marketing[] }>(),
    'Update Marketing': props<{ marketing: Update<Marketing> }>(),
    'Update Marketings': props<{ marketings: Update<Marketing>[] }>(),
    'Delete Marketing': props<{ id: string }>(),
    'Delete Marketings': props<{ ids: string[] }>(),
    'Clear Marketings': emptyProps(),
  }
});
