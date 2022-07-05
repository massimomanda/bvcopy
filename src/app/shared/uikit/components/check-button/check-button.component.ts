import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface Configuration{
  text?:string;
  value?:string;
  selected?: boolean;
}

@Component({
  selector: 'app-check-button',
  templateUrl: './check-button.component.html',
  styleUrls: ['./check-button.component.css']
})
export class CheckButtonComponent implements OnInit {


 @Input('configuration') configuration: Configuration = {};
 @Output('selectedValue') selectedValue = new EventEmitter();
 @Input('name') name: string ="";
 @Input('controlName') controlName: string = '';
 @Input('parentFormGroup') parentFormGroup: FormGroup = {} as FormGroup;
 @Input('id') id: string ="";
 
 @ViewChild('check') check: ElementRef | undefined;


  constructor() { }
  log(e:any){

  }
  ngOnInit(): void {
  }

  changeCheckboxState(e:any){

    this.check?.nativeElement.click();
    
  }

  emitValue(e:any){
    if(!this.configuration.selected && e.target.id === 'wrapper'){
      this.changeCheckboxState(e);
    }
    this.selectedValue.emit(this.configuration)
    
  }

}
