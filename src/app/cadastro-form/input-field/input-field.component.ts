import { Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements ControlValueAccessor{


  @Input() classeCss: any;
  @Input() id!: string;
  @Input() label!: string;
  @Input()type = 'text';
  @Input() control: any;
  isReadOnly: boolean = false;
  isDisableOnly: boolean = false;

  private innerValue: any;

  get value() {
    return this.innerValue;
  }

  set value(v: any){
    if (v !== this.innerValue){
      this.innerValue = v;
      //ToDo
    }
  }

  constructor( ){
  }

  onChangeCb: (_: any) => void = () => {};
  onTouchedCb: (_: any) => void = () => {};

  writeValue( v: any): void {
    if(v !== this.innerValue){
      this.value = v;
    }
  }
  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isReadOnly = this.isDisableOnly;
  }

  ngOnInit(){

  }



}
