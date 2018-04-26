import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // Angular只绑定public的属性到template上
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
