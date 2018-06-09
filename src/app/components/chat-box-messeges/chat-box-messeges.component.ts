import { FirebaseCRUDService } from './../../services/firebase-crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-box-messeges',
  templateUrl: './chat-box-messeges.component.html',
  styleUrls: ['./chat-box-messeges.component.css']
})
export class ChatBoxMessegesComponent implements OnInit {
  messages$: any;
  constructor(private firebaseCRUDService: FirebaseCRUDService) {}

  ngOnInit() {
    this.messages$ = this.firebaseCRUDService.getCollection('messages');
  }
}
