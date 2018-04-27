import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages: string[] = [];

  add(message: string) {
    // this.messages.push(message);
    this.messages = [ message ]; // 只显示最近一条消息
  }

  clear() {
    this.messages = [];
  }

  constructor() { }

}
