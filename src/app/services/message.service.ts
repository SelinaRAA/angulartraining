import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  //defines a variable - of type string array.
  messages: string[] = [];

  addMessage(message: string) {
    this.messages.push(message);
  }

  //clears all messages
  clear() {
    this.messages = [];
  }
}