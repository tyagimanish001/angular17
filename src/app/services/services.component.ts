import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Comp1Component } from '../comp1/comp1.component';
import { Comp2Component } from '../comp2/comp2.component';
import { MessageService } from '../myServices/message.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, Comp1Component, Comp2Component],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  _msg: string = "";
  constructor(private _messageService: MessageService) {
    //  this._msg = _messageService.getmessage();
  }

  getService() {
    this._msg = this._messageService.getmessage();

  }


}
