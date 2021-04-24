import { Component, OnInit } from '@angular/core';
import { PollService } from '../../services/poll.service';
import { Poll } from '../.././models/poll';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  polls: Poll[];

  constructor(private pollService: PollService) { }

  ngOnInit(): void {
    this.pollService.getPolls().subscribe(polls => {
      this.polls = polls;
    }, error => {
      console.log(error);
    });
  }
  

}
