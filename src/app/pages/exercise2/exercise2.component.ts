import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.css']
})
export class Exercise2Component {
    
//VALIDACIONES
  public formLogin!: FormGroup;
  constructor(private formBuilder:FormBuilder){
  
  }
   ngOnInit():void{
    this.formLogin = this.formBuilder.group({
     name:['', 
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ],
     surname:['', 
    [
      Validators.required,
      Validators.minLength(3)
    ]
    ],
     DNI:['', 
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern(/^[0-9]\d*$/)
        
      ]
    ],
    city:['', 
    [
      Validators.required,
      Validators.minLength(3)
    ]
    ],
    })
  }
}
