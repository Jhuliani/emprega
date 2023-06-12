import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent implements OnInit {

  @Input() msgErro: string = "";
  @Input() mostrarErro!: boolean;
  @Input() control!: FormControl;
  @Input() label!: string;


  ngOnInit() {


  }

  get errorMessage(){

    for(const propertyName in this.control.errors){
      if(this.control.errors.hasOwnProperty(propertyName) &&
      this.control.touched) {
        //todo
      }
    }
    return null;
  }

}
