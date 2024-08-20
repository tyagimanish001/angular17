import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  outputs: ['childevent'],
  inputs: ['Pdata']
})
export class ChildComponent {

  classApply = 'boldclass';
  uname = 'manish';
  change(val: any) {
    this.uname = val.value;
  }

  msg: string = ' ';
  onAdd() {
    this.msg = 'Product is Added in Cart';
  }
  currentVaue: boolean = true;
  multiStyle = {
    'background': 'yellow',
    'border': '1px solid black',
    'width': '120px',
    'height': '50px',

  };

  enable() {
    this.currentVaue = !this.currentVaue;
  }

  name = ' manish';
  num1 = 200;
  num2 = 200;
  onchange() {
    this.name = "Naman";
  }

  company = {
    Name: 'TATA',
    City: 'Grugram',
    State: 'Haryana',
    Country: 'India',
  }
  // company: any;

  fontsize = 60;
  country = 'USA';
  Pdata: any;

  childevent = new EventEmitter();
  senddata(val: any) {
    // console.log(val)
    this.childevent.emit(val);
  }

  employees: any[] = [
    { name: 'Manish', country: 'India' },
    { name: 'Jon', country: 'USA' },
    { name: 'Roman', country: 'England' },
    { name: 'Ram', country: 'India' },
    { name: 'Peeter', country: 'USA' },

  ]

  getColor(country: any) {
    if (country == 'India') {
      return 'blue';
    } else if (country == 'USA') {
      return 'red';
    } else {
      return 'orange';
    }
  }
}
