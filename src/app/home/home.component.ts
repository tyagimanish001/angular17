import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WelcomePipe } from '../myPipes/welcome.pipe';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, WelcomePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  name = 'Welcome Sahosoft Technologies...';
  num = 20.20;

  user: string = "Manish Tyagi";

  currentData = new Date();

  company = {
    Name: 'TATA',
    City: 'Grugram',
    State: 'Haryana',
    Country: 'India',
  }


  students: any[] = [
    { id: '001', name: 'Manish', gender: 'Male' },
    { id: '002', name: 'Naman', gender: 'Male' },
    { id: '003', name: 'Kreena', gender: 'Female' },
    { id: '004', name: 'Jone', gender: 'Male' },
    { id: '005', name: 'Radhika ', gender: 'Female' },
    { id: '006', name: 'Sanjil', gender: 'Male' },
  ]

  pipeStyle = {
    'background': 'blue',
    'color': 'white',
    'text-align': 'center'
  };




}
