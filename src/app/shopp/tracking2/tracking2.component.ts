//import { ngfactoryFilePath } from '@angular/compiler/src/aot/util';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';


interface ColisEtat {
  data : string , 
  dataClass :string;
}

@Component({
  selector: 'app-tracking2',
  templateUrl: './tracking2.component.html',
  styleUrls: ['./tracking2.component.scss']
})
export class Tracking2Component implements OnInit {


  check :boolean = false ;

  @ViewChild('div') div: ElementRef;

  @ViewChild('div2') div2: ElementRef;
  @ViewChild('p') p1: ElementRef;
  constructor(private renderer: Renderer2) {  this.tabledatajsson = [];  }

  ngOnInit(): void {
    this.melangeData();
    this.getRracker();
  }


 setetatcheck(id:number){

 }

  // semuithom mn moghi    just  naaref  Enaatents EnCours livre  w begi mn moghi  

 x = [
    "Enattente" ,  "Encours" ,  "livre" , "Audepot" ,  "Rtndepot" ,  "Retourcuu" , "REtourexpideteur"
 ]
 gh:boolean = false;
    
   datatrack ={
    "id": 1,
    "prenom": "hm",
    "nom": "Eya",
    "numtel": "21336655",
    "deuxiemenumtel": "24338455",
    "adresse": "rue 22 bis rue essadikia, khaznadar,le bardo",
    "codepostal": 2001,
    "adressepickup": "rue 22 bis rue essadikia, khaznadar,le bardo",
    "gouvernorat": "nabeul",
    "designationproduits": "gafsa",
    "remarque": null,
    "adressemail": "benismaileeyouta@gmail.com",
    "montant": 10000,
    "etatcolis": [
      {
    "createdAt": "2021-04-15T09:52:00Z",
    "updatedAt": "2021-04-15T09:52:00Z",
    "id": 1,
    "etat_colis": "Enattente"
    },
      {
    "createdAt": "2021-04-15T13:14:33Z",
    "updatedAt": "2021-04-15T13:14:33Z",
    "id": 2,
    "etat_colis": "Encours"
    },
      {
    "createdAt": "2021-04-15T13:16:24Z",
    "updatedAt": "2021-04-15T13:16:24Z",
    "id": 3,
    "etat_colis": "livre"
    }
    ],
    
   }

   tabledatajsson :ColisEtat[];



   melangeData(){

                    
       for(let g  of this.datatrack.etatcolis){

               this.tabledatajsson.push(  
                {
                  dataClass:"step  active",
                     data: g.etat_colis
                   
               }
               
               );


       }

       for(let g  of this.x){

        this.tabledatajsson.push({
          dataClass:"step",
              data: g
            
        });


}

 
console.log(this.tabledatajsson);
   }

   addElement() {
    const p: HTMLParagraphElement = this.renderer.createElement('p');
    p.innerHTML = '7ot msg thib aalih  lina ';
    this.renderer.appendChild(this.p1.nativeElement, p);


    

   setTimeout(alert, 40000); // Will alert once, after a second.
   this.renderer.removeChild(this.p1.nativeElement,p);
   /*
setInterval(function(){ 
  alert("here");
  this.renderer.removeChild(this.p1.nativeElement,p);
	console.log("Oooo Yeaaa!");
}, 2000);*/
      
      
    //this.renderer.removeChild(this.p1.nativeElement,p);
  }

   listTrack = [];


   getRracker(){
    const p: HTMLParagraphElement = this.renderer.createElement('div');
    const p2: HTMLParagraphElement = this.renderer.createElement('div2');
     for(let ti of  this.datatrack.etatcolis){

            for (let k of this.x){
         
              if(ti.etat_colis == k){


                this.gh = true
              
                p.innerHTML += '  ' + ti.etat_colis +  '';
                
              }
              else {
                p2.innerHTML += k;
                this.gh =false;
              }
            }

           
     }

     this.renderer.appendChild(this.div.nativeElement, p);
     this.renderer.appendChild(this.div.nativeElement, p2);
   }


}
