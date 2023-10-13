import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromActions from '../../../store/residential.actions'
import { selectError, selectYourData } from '../../../store/residential.selectors'
import { Observable, Subscription } from 'rxjs';
import { ResidentialState } from '../../../store/residential.reducer';
import { Residential } from '../../../store/residential.model';
import mappings from '@app-config/mapping/apiEndpoint.json';
import { ApiService, EncryptionService } from '@core/services';
import { SubscriptionService } from '../../../services/subscription.service';
import { CustomResponse } from '@core/models/external-reponse';
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit, OnDestroy {

  userList: any;
  values: any;
  userdetails: any;
  filteredList: any;
  searchText = '';
   userListSubscription: Subscription = new Subscription();
  error$ = this.store.select(selectError);
  //data$ = this.store.select(selectYourData);

  constructor(private store: Store,
    private api: ApiService,
    private subscriptionService: SubscriptionService,
    private encrypt: EncryptionService) {
  }

  ngOnInit(): void {

    this.store.dispatch(fromActions.addResidential());
    this.userList = this.store.pipe(select(selectYourData));
    this.userListSubscription = this.userList.subscribe(
      {
        next: (response: CustomResponse) => {
          this.values = response['data'];
          this.userdetails = response['data']
          this.filteredList = this.userdetails;
        },
        error: (error: any) => {
          console.log(error)
        }
      });

      const encrypted = this.encrypt.encryptionAES('hello world');
      const decrypted = this.encrypt.decryptionAES(encrypted);
      console.log(encrypted);
      console.log(decrypted);

  //  this.getUsersList();
  }
  getUsersList() {
    this.subscriptionService
      .getUsersDetails('baseApi')
      .subscribe(
        {
          next: (response: CustomResponse) => {
            this.userdetails = response?.data['data']
            this.filteredList = this.userdetails;
          },
          error: (error) => {
            console.log(error)
          }
        }
      )
  }


  sort(key: string) {
    this.filteredList.sort((a: any, b: any) => (a[key] > b[key]) ? 1 : -1);
  }

  filter() {
    this.filteredList = this.userdetails.filter((user: any) =>
      user.first_name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      user.last_name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  ngOnDestroy(): void {
    this.userListSubscription.unsubscribe();
  }

}
