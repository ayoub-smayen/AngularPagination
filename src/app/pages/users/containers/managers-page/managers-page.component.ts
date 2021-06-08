import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managers-page',
  templateUrl: './managers-page.component.html',
  styleUrls: ['./managers-page.component.css'],
})
export class ManagersPageComponent implements OnInit {
  type: string = 'manager';
  constructor() {}

  ngOnInit(): void {}
}
