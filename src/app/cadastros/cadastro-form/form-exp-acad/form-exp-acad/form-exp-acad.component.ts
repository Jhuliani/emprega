import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-exp-acad',
  templateUrl: './form-exp-acad.component.html',
  styleUrls: ['./form-exp-acad.component.css']
})
export class FormExpAcadComponent {
  @Input() formGroup!: FormGroup;

}
