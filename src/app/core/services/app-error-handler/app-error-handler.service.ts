import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env';

@Injectable()
export class AppErrorHandlerService implements ErrorHandler {

  public router: Router | undefined;
  public isErrorPage = false;

  constructor(public injector: Injector) { }

  handleError(error: { status: number; }): void {
    this.router = this.injector.get(Router);
    if (error.status === 500 || error.status === 0) {
      this.isErrorPage = true;
      this.router.navigate(['/error']);
      // IMPORTANT: Rethrow the error otherwise it gets swallowed
    } else {
      console.log('Something went wrong in application...');
      //  this.router.navigate(['/error']);
      if (!environment.production) { throw error; }
    }
  }

}
