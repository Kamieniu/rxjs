import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxValueComponent } from './chat-box-value/chat-box-value.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatBoxMessegesComponent } from './chat-box-messeges/chat-box-messeges.component';
import { FirebaseCRUDService } from './../services/firebase-crud.service';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatCardModule],
  declarations: [ChatBoxValueComponent, ChatBoxMessegesComponent],
  providers: [FirebaseCRUDService],
  exports: [ChatBoxValueComponent, ChatBoxMessegesComponent]
})
export class ComponentsModule {}
