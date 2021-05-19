import { Injectable } from '@angular/core';

import * as Stomp from 'stompjs';
import * as SockJs from 'sockjs-client';
@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
constructor() { }

public connect() {
  let socket = new SockJs(`http://localhost:8091/ws`);

  let stompClient = Stomp.over(socket);

  return stompClient;
}
}
