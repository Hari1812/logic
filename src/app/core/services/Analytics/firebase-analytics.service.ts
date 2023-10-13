import { Injectable } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
// import * as firebase from 'firebase';
//import { AngularFireAnalytics } from '@angular/fire/analytics';
@Injectable({
  providedIn: 'root'
})
export class FirebaseAnalyticsService {
  //private analytics: firebase.default.analytics.Analytics;

  constructor(private analytics: AngularFireAnalytics) {
    // use any one of the codes below depends on the version
    // firebase version 8
   // this.analytics = firebase.default.analytics();
    // firebase version 7
    // this.analytics = firebase.analytics();
  }

  logEvents(eventName: string, eventParameters: object): void {
    // shared method to log the events
    this.analytics.logEvent(eventName, { day: new Date().getDate() });
  }

}
