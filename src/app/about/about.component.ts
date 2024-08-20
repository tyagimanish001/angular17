import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  val: string = '';

  employees: any[] = [
    { id: '001', name: 'Manish' },
    { id: '002', name: 'Naman' },
    { id: '003', name: 'Raju' },
    { id: '004', name: 'Jone' },
    { id: '005', name: 'Ritik ' },
    { id: '006', name: 'Sanjil' },
  ]



  num1 = 2000;
  num2 = 200;

  isValid: boolean = true;

  login() {
    this.isValid = true;
  }

  logout() {
    this.isValid = false;
  }

  gender = true;
  onchange(val: any) {
    this.gender = val;
  }
}
