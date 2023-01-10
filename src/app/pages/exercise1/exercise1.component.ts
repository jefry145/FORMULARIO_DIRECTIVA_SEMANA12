import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component {
//Error msg
show=false

validacion!:any
mostrarMsg(){
  this.validacion = this.formLogin.valid
  switch (this.validacion) {
    case true:
       this.show=true
      break;
    case false:
      
      break;
  }
  console.log(this.formLogin.value)
}

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
