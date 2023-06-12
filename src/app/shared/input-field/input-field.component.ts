import { Component, Input, OnChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements ControlValueAccessor {


  @Input() classeCss: any;
  @Input() id!: string;
  @Input() label!: string;
  @Input() type = 'text';
  @Input() control: any;

  private innerValue: any;
  get value() {
    return this.innerValue;
  }

  set value(v: any){
    if (v !== this.innerValue){
      this.innerValue = v;
      this.OnChangeCb(v);
    }
  }

  constructor(){

  }

  OnChangeCb: (_:any) => void = () => {};
  onTouchedCb: (_:any) => void = () => {};


  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }


}