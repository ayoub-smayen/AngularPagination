import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
export interface news {
  source: Source;
  author?: any;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface Source {
  id?: any;
  name: string;
}
@Component({
  selector: 'app-support-requests',
  templateUrl: './support-requests.component.html',
  styleUrls: ['./support-requests.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class SupportRequestsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public dataSource: MatTableDataSource<news>;
  public columnsToDisplay: string[] = [
    'author',
    'title',
    
  ];
  expandedElement: String[] | null;
  constructor(private http: HttpClient) {}
  public getnews(): Observable<any> {
    return this.http.get<any>(
      'https://newsapi.org/v2/top-headlines?country=fr&category=business&apiKey=5089f4b808ba44cd8c16e146a4b157e9'
    );
  }
  ngOnInit() {
    this.getnews().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res.articles);
      this.dataSource.paginator = this.paginator;
      console.log(res)
    });
  }
}
