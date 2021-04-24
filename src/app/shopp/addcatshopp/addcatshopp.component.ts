import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-addcatshopp',
  templateUrl: './addcatshopp.component.html',
  styleUrls: ['./addcatshopp.component.scss']
})
export class AddcatshoppComponent implements OnInit {



   category : Category ;


  public opened = true;
    public dataSaved = false;

    public close() {
      this.opened = false;
    }

    public open() {
      this.opened = true;
    }

    public submit() {
        this.dataSaved = true;
        this.close();
    }
  constructor(private categoryService : CategoryService, private router : Router) {  this.category =new Category();}

  ngOnInit(): void {
  }

  addCategory(){
    return this.categoryService.addCategory(this.category).subscribe(res=>{
      console.log(res);
       alert("addd");

       this.router.navigate(['book']);

        
    });
  }

}
