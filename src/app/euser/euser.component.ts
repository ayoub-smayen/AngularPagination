import { Component, OnInit } from '@angular/core';
import { Euser } from '../models/euser';
import { EuserserviceService } from '../services/euserservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-euser',
  templateUrl: './euser.component.html',
  styleUrls: ['./euser.component.css']
})
export class EuserComponent implements OnInit {
 /* form: FormGroup;
  id: any;
  isAddMode: boolean;
  loading = false;
  submitted = false*/
  private selectedFile2;
imageUrl2: any;
euser:Euser;
message:any;
  constructor(
    //private formBuilder: FormBuilder,
    private route: ActivatedRoute, 
      private router: Router, 
        private euserserviceService: EuserserviceService ,private http: HttpClient) { this.euser = new Euser(); }

        ngOnInit(): void {
   
        }
    
     /* registerNow(){
        let resp=this.euserserviceService.addUser(this.euser).subscribe((data)=>this.message=data);
    }*/

add()
{
  
  const uploadData = new FormData();
  uploadData.append('file', this.selectedFile2, this.selectedFile2.name);


  this.http.post('http://localhost:8091/api/euser/uploadimage', uploadData, { observe: 'response' })
  .subscribe((response) => {
    console.log(response);

    if (response.status === 200) {
      this.euserserviceService.addUser(this.euser).subscribe(
        
        (profile) => {
          console.table(this.euser);
          //this.bookAddedEvent.emit();
      
window.location.reload();
          this.router.navigate(['home']);
        }
      );
      console.log('Image uploaded successfully');
    } else {
      console.log('Image not uploaded successfully');
    }
  }
  );

}
public onFileChanged2(event) {
  console.log(event);
  this.selectedFile2 = event.target.files[0];

  let reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event2) => {
    this.imageUrl2 = reader.result;
  };

    }

         /*this.id = this.route.snapshot.params['id'];
        this.isAddMode = !this.id;
        
        // password not required in edit mode
        const passwordValidators = [Validators.minLength(6)];
        if (this.isAddMode) {
            passwordValidators.push(Validators.required);
        }

        this.form = this.formBuilder.group({
            title: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            role: ['', Validators.required],
            password: ['', [Validators.minLength(6), this.isAddMode ? Validators.required : Validators.nullValidator]],
            confirmPassword: ['', this.isAddMode ? Validators.required : Validators.nullValidator]
        }, {
           // validator: MustMatch('password', 'confirmPassword')
        });

        if (!this.isAddMode) {
            this.euserserviceService.getById(this.id)
                .pipe(first())
                .subscribe(x => this.form.patchValue(x));
        }
    }
// convenience getter for easy access to form fields
get f() { return this.form.controls; }

onSubmit() {
    this.submitted = true;

    // reset alerts on submit
   // this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    this.loading = true;
    if (this.isAddMode) {
        this.createUser();
    } else {
        this.updateUser();
    }
}
private createUser() {
  this.euserserviceService.add(this.form.value)
      .pipe(first())
      .subscribe({
          next: () => {
             // this.alertService.success('User added', { keepAfterRouteChange: true });
              this.router.navigate(['../'], { relativeTo: this.route });
          },
          error: error => {
             // this.alertService.error(error);
              this.loading = false;
          }
      });
}

private updateUser() {
  this.euserserviceService.update(this.id, this.form.value)
      .pipe(first())
      .subscribe({
          next: () => {
             // this.alertService.success('User updated', { keepAfterRouteChange: true });
              this.router.navigate(['../../'], { relativeTo: this.route });
          },
          error: error => {
             // this.alertService.error(error);
              this.loading = false;
          }
      });
  }*/
  /*  onSubmit() {
      this.euserserviceService.add(this.euser).subscribe(result => this.gotoUserList());
    }
  
    gotoUserList() {
      this.router.navigate(['/users']);
    }
  }*/




}
