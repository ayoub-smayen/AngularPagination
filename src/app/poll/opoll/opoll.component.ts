import { Component, OnInit } from '@angular/core';
import { PollService } from '../../services/poll.service';
import { Poll } from '../.././models/poll';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-opoll',
  templateUrl: './opoll.component.html',
  styleUrls: ['./opoll.component.scss']
})
export class OpollComponent implements OnInit {

  constructor(private pollService: PollService, private route: ActivatedRoute, private router: Router) { }

  poll: Poll;
  options = [];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel;
  showYAxisLabel = true;
  yAxisLabel = 'Votes';
  responsive: true;
  maintainAspectRatio: false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  ngOnInit() {
    this.route.params.pipe(
      switchMap(params => this.pollService.getPoll(params['id'])))
      .subscribe(poll => {
        this.poll = poll;
        this.options = [];
        this.poll.options.forEach(option => {
          this.options.push({
            'name': option.option,
            'value': option.score
          });
          this.xAxisLabel = this.poll.title;
        });
      }, error => {
        console.log(error);
      });
  }

  onSelect(event) {
    console.log(event);
  }
}