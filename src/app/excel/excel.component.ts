
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ExportExcelService } from '../services/export-excel.service';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
})
export class ExcelComponent implements OnInit {
 
  //excel
  dataForExcel = [];

  empPerformance = [
    { userid: 26, firstname: "eyaaaaa", password: "123456789", confirmpassword: "123456789", email: "bahria.eya@esprit.tn", city: "tunis", address: "", phonenumber: 95851500 , age: 50, sexe: "femme"},
    { ID: 23, firstname: "raed", password: "fghjkl", confirmpassword: "fghjkl", email:"bahria.raed@gmail.com", city: "nabeul", address: "rue de la plage", phonenumber: 95874632 , age: 22, sexe: "homme"},
    { ID: 18, firstname: "yasmine", password: "azerty", confirmpassword: "azerty", email:"yasmine.bahria@gmail.com", city: "nabeul", address: "rue de la plage", phonenumber: 97854123, age: 26, sexe: "femme" },
    { ID: 25, firstname: "eya", password: "ghjkl", confirmpassword: "fghjk", email: "bahria.eya@esprit.tn", city: "nabeul", address: "rue de la plage", phonenumber: 95851500, age: 22 , sexe: "femme" },
  ];
  constructor(private http:HttpClient,public ete: ExportExcelService) { }

  ngOnInit(): void {
  }
  
 
 exportToExcel() {

  this.empPerformance.forEach((row: any) => {
    this.dataForExcel.push(Object.values(row))
  })

  let reportData = {
    title: 'Users Report - Mai 2021',
    data: this.dataForExcel,
    headers: Object.keys(this.empPerformance[0])
  }

  this.ete.exportExcel(reportData);
}
}