import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ResidentialEffects } from './residential.effects';

describe('ResidentialEffects', () => {
  let actions$: Observable<any>;
  let effects: ResidentialEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ResidentialEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ResidentialEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
