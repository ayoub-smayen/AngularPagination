import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ExportExcelService } from '../services/export-excel.service';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
 
  //excel
  dataForExcel = [];

  empPerformance = [
    { ID: 10011, NAME: "A", DEPARTMENT: "Sales", MONTH: "Jan", YEAR: 2020, SALES: 132412, CHANGE: 12, LEADS: 35 },
    { ID: 10012, NAME: "A", DEPARTMENT: "Sales", MONTH: "Feb", YEAR: 2020, SALES: 232324, CHANGE: 2, LEADS: 443 },
    { ID: 10013, NAME: "A", DEPARTMENT: "Sales", MONTH: "Mar", YEAR: 2020, SALES: 542234, CHANGE: 45, LEADS: 345 },
    { ID: 10014, NAME: "A", DEPARTMENT: "Sales", MONTH: "Apr", YEAR: 2020, SALES: 223335, CHANGE: 32, LEADS: 234 },
    { ID: 10015, NAME: "A", DEPARTMENT: "Sales", MONTH: "May", YEAR: 2020, SALES: 455535, CHANGE: 21, LEADS: 12 },
  ];
  constructor(private http:HttpClient,public ete: ExportExcelService) { }

  ngOnInit(): void {
  }
  num=0;
  getAppvisit()
  {
   const httpOptions = {
     headers: new HttpHeaders({'Content-Type': 'text/plain'})
   };
 
  return  this.http.get("http://localhost:8091/api/lvisit",httpOptions).subscribe((res:number) =>{
     
 alert(res);
 this.num = res;
 
          
 });
 }
 
 exportToExcel() {

  this.empPerformance.forEach((row: any) => {
    this.dataForExcel.push(Object.values(row))
  })

  let reportData = {
    title: 'Employee Sales Report - Jan 2020',
    data: this.dataForExcel,
    headers: Object.keys(this.empPerformance[0])
  }

  this.ete.exportExcel(reportData);
}
}

