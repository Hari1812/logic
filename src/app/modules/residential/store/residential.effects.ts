import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SubscriptionService } from '../services/subscription.service';
import { catchError, concatMap, map } from 'rxjs/operators';

import * as fromActions from './residential.actions';
import { of } from 'rxjs';
@Injectable()
export class ResidentialEffects {


  constructor(private actions$: Actions,
    private subscriptionService: SubscriptionService) {}

    loadAllResidential$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.addResidential),
      concatMap((action) => 
       this.subscriptionService.getUsersList()
       .pipe(
        map((res: any) => fromActions.loadResidential({residential: res.data})),
        catchError((error) => of(fromActions.loadDataFailure({ error })))
      )),
    ),
  );
}
