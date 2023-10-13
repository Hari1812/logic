import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import * as mappings from '@app-config/mapping/index';
import { ApiService } from '@core/services/API/api.service';
@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private apiService: ApiService) { }

  getUsersList() {
    let path = mappings.cmsApi.getUsersList;
   //let path = "/api/users?page=2";
   return this.apiService.getData('baseApi', path);
   // return this.apiService.getData('baseApi', path).pipe( map((res: any) => res?.data));
  }

  
  getUsersDetails(endpointname: string) {
    let path = mappings.cmsApi.getUsersList;
   // let path = "/api/users?page=2";
    return this.apiService.getData('baseApi', path);
    // return this.apiService.getData('baseApi', path).pipe( map((res: any) => res?.data));
   }
}
