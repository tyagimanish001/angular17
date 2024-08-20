import { Component } from '@angular/core';
import { NumlistService } from '../myServices/numlist.service';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css',
})
export class Comp1Component {

  list1: number[] = [];
  constructor(private _numlistService: NumlistService) {
    this.list1 = _numlistService.getlist();
  }

  addnumber(val: any) {
    this._numlistService.addnum(val);
    this.list1 = this._numlistService.getlist();
  }

  //session management

  company = {
    name: 'Sahosoft Technology',
    city: 'Noida',
    state: 'UP',
    country: 'India'
  }

  setData() {
    localStorage.setItem("empId", "001");
    localStorage.setItem("empName", "Manish");
    localStorage.setItem("compData", JSON.stringify(this.company))
  }

}