import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { AlertModalComponent } from './components/alert-modal/alert-modal.component';



@NgModule({
  declarations: [LoaderComponent, AlertModalComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
