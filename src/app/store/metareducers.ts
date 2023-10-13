import { ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import {resetMetareducer } from './reducermap';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: [
      {
        'marketings': {
          encrypt: (state: string) => btoa(unescape(encodeURIComponent(state))),
          decrypt: (state: string) => decodeURIComponent(escape(atob(state))),
        }
      },
      {
        'residentials': {
          encrypt: (state: string) => btoa(unescape(encodeURIComponent(state))),
          decrypt: (state: string) => decodeURIComponent(escape(atob(state))),
        }
      },
    ],
    rehydrate: true,
  })(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer,resetMetareducer];
