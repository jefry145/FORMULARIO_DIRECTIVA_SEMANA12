import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Exercise1Component } from './exercise1/exercise1.component';
import { Exercise2Component } from './exercise2/exercise2.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '../pipeJsonPipe';
import { EventerrorDirective } from '../directiva/eventerror.directive';



@NgModule({
  declarations: [
    Exercise1Component,
    Exercise2Component,
    JsonPipe,
  
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[
    Exercise1Component,
    Exercise2Component
  ]
})
export class PagesModule { }
