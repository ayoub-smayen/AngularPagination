import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-putproduct',
  templateUrl: './putproduct.component.html',
  styleUrls: ['./putproduct.component.scss']
})
export class PutproductComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

}
