import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit {

  regForm!: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    // this.regForm = new FormGroup({
    //   id: new FormControl(),
    //   fname: new FormControl(),
    //   lname: new FormControl(),
    //   email: new FormControl(),
    //   mobileno: new FormControl(),
    // })

    // this.regForm = this._fb.group({
    //   id: new FormControl(''),
    //   fname: new FormControl(''),
    //   lname: new FormControl(''),
    //   email: new FormControl(''),
    //   mobileno: new FormControl('098765'),
    // })

    this.regForm = this._fb.group({
      id: [''],
      fname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileno: ['262626', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    })
  }

  register() {
    console.log(this.regForm.value);
    // console.log(this.regForm.get('fname')?.value);
    // console.log(this.regForm.get('email')?.value);

  }

  reset() {
    // this.regForm.reset();

    this.regForm.reset({
      fname: this.regForm.get('fname')?.value
    })
  }

  fillData() {
    // this.regForm.setValue({
    //   id: '001',
    //   fname: 'Manish',
    //   lname: 'Tyagi',
    //   email: 'tyagi@manish',
    //   mobileno: '1234567892',
    // })

    this.regForm.patchValue({
      //id: '001',
      fname: 'Manish',
      lname: 'Tyagi',
      email: 'tyagi@manish',
      mobileno: '1234567892',
    })
  }

}
