import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-putcategory',
  templateUrl: './putcategory.component.html',
  styleUrls: ['./putcategory.component.scss']
})
export class PutcategoryComponent implements OnInit {




  category  : any =null ;
  message : string ; 
  constructor(private route: ActivatedRoute,
    private catserv : CategoryService,
    private router: Router) {this.message =''; }

  ngOnInit(): void {
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }

  getTutorial(id): void {
    this.catserv.getatbyid(id)
      .subscribe(
        data => {
          const fg = data; 
          this.category = fg.cv;
          console.log(data);
          alert(data);
        },
        error => {
          console.log(error);
        });
  }

  updateTutorial(): void {
    console.table(this.category);
    this.catserv.addCategory( this.category)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';

          this.router.navigate(['/addcategory1']);
        },
        error => {
          console.log(error);
        });
  }

}
