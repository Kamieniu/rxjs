import { Message } from '../interfaces/ message.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Injectable()
export class FirebaseCRUDService {
  constructor(private db: AngularFirestore) {}

  getCollection(collectionName: string) {
    return this.db
      .collection(collectionName)
      .valueChanges()
      .pipe(
        map((values: Message[]) =>
          values.map(value => {
            return new Message(value.timestamp, value.name, value.text);
          })
        )
      );
  }

  sendValue(collectionName: string, data: Message) {
    return this.db.collection(collectionName).add(data);
  }
}
