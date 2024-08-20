import { Component } from '@angular/core';
import { NumlistService } from '../myServices/numlist.service';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css',

})
export class Comp2Component {

  list1: number[] = [];
  constructor(private _numlistService: NumlistService) {
    this.list1 = _numlistService.getlist();
  }

  addnumber(val: any) {
    this._numlistService.addnum(val);
    this.list1 = this._numlistService.getlist();

  }

  //session management

  getData() {
    console.log(localStorage.getItem("empId"));
    console.log(localStorage.getItem("empName"));
    console.log(JSON.parse(localStorage.getItem("compData")!));

    console.log(localStorage.length)
  }

  deleteData() {
    localStorage.removeItem("empId");
    //localStorage.removeItem("empName");
  }

  deleteAll() {
    localStorage.clear();
  }
}
