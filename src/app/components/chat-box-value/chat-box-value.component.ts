import { Message } from './../../interfaces/ message.interface';
import { FirebaseCRUDService } from './../../services/firebase-crud.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat-box-value',
  templateUrl: './chat-box-value.component.html',
  styleUrls: ['./chat-box-value.component.css']
})
export class ChatBoxValueComponent implements OnInit {
  newMessageForm: FormGroup;

  constructor(private firebaseCRUDService: FirebaseCRUDService) {}

  ngOnInit() {
    this.newMessageForm = new FormGroup({
      message: new FormControl('', [Validators.required])
    });
  }
  onSubmit(formValue) {
    const message = <Message>{
      name: 'franek',
      text: formValue,
      timestamp: new Date().getTime()
    };

    this.firebaseCRUDService.sendValue('messages', message);

    this.newMessageForm.reset();
  }
}
