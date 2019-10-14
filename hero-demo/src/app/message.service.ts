import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message: string[] = [];

  constructor() {
  }

  addMessage(n: string) {
    this.message.push(n);
  }

  clear() {
    this.message = [];
  }
}
