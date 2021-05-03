import { Component } from '@angular/core';
import { MessageserviceService } from './messageservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFrontProject';
  input;
  constructor(public messageService: MessageserviceService) {}
  sendMessage() {
    if (this.input) {
      this.messageService.sendMessage(this.input);
      this.input = '';
    }
  }
}
