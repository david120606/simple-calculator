import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  operacion : string =''
  constructor() {
   }

  ngOnInit(): void {
  }
  buttonPress(value: string) {
    console.log(value)
this.operacion = this.operacion + value ;
  }
}
