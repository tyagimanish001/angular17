import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private _message: string = 'Wecome to our Website & thanks for visiting our website'
  constructor() { }

  getmessage() {
    return this._message;
  }
}
