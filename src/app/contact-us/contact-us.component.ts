import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule, ChildComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  twoway: string = 'Two way Data Binding';

}
