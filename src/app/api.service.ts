import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { Observer, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  observer: Observer<any>;
  
  constructor() { }

  public getSocketData = () => {
    const socket = socketIo('http://157.245.193.153:2000');
    socket.on('onoff', response => {
      return this.observer.next(response);
    });
    return this.createObservable();
  }

  createObservable() {
    return new Observable(observer => this.observer = observer);
  }
}
