import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { MarketingEffects } from './marketing.effects';

describe('MarketingEffects', () => {
  let actions$: Observable<any>;
  let effects: MarketingEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MarketingEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(MarketingEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
