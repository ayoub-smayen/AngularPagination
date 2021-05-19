import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-notif',
  templateUrl: './notif.component.html',
  styleUrls: ['./notif.component.css']
})
export class NotifComponent implements OnInit {

  constructor(private service: WebsocketService) {
    let stompClient = this.service.connect();
        stompClient.connect({}, frame => {
          let messageElement = document.createElement('li');

			// Subscribe to notification topic
            stompClient.subscribe('/topic/notification', notifications => {
              messageElement.classList.add('event-message');
				// Update notifications attribute with the recent messsage sent from the server
                this.notifications = JSON.stringify(notifications.body);
         
})
        });






  }
  public notifications = '';
  ngOnInit(): void {


  }

}
