import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEventerror]'
})
export class EventerrorDirective {
  constructor(){}
  // constructor(private readonly elRef: ElementRef){}
  // @HostListener("input" , ["$event"])
  // onChangeInput(event: Event):void{
  //    console.log(this.elRef.nativeElement);
  // }
}
