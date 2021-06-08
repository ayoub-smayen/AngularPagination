import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent  {

  public notifications = '';

    constructor(private webSocketService: WebsocketService) {

		// Open connection with server socket
        let stompClient = this.webSocketService.connect();
        stompClient.connect({}, frame => {
          let messageElement = document.createElement('li');

			// Subscribe to notification topic
            stompClient.subscribe('/topic/notification', notifications => {
              messageElement.classList.add('event-message');
				// Update notifications attribute with the recent messsage sent from the server
                this.notifications = JSON.parse(notifications.body).count;
            })
        });
    }

}
