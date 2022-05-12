import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from '../models/Client';

@Injectable()
export class ClientService {

  clientCollection: AngularFirestoreCollection<Client>;
  clientDoc: AngularFirestoreDocument<Client>;

  constructor(private afs: AngularFirestore) {
    this.clientCollection = this.afs.collection<Client>('user');
  }

  getClients(): Observable<Client[]> {
    return(
      this.clientCollection.snapshotChanges().pipe(
        map(changes => {
          return(
            changes.map(action => {
              const data = action.payload.doc.data();
              data.id = action.payload.doc.id;
              return data;
            })
          );
        }
      )
    )
   );
  }

  getClient(id: string): Observable<Client> {
    return (
      this.afs.doc<Client>(`user/${id}`).snapshotChanges().pipe(
        map((action) => {
            if (action.payload.exists) {
              const data = action.payload.data();
              data.id = action.payload.id;
              return data;
            }else {
              return null;
            }
          }
        )
      )
    );
  }

  addClient(client: Client) {
    return this.clientCollection.add(client);
  }

  updateBalance(client: Client) {
    return this.afs.doc(`user/${client.id}`).update(client);
  }

  deleteClient(client: Client) {
    return this.afs.doc(`user/${client.id}`).delete();
  }

}
