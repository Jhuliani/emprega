import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-debug-form',
  templateUrl: './debug-form.component.html',
  styleUrls: ['./debug-form.component.css']
})
export class FormDebugComponent implements OnInit {

  @Input() form: any;

  constructor() { }

  ngOnInit() {
  }

}
