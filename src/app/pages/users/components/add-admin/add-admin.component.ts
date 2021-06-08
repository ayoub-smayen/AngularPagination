import { Component, Input } from '@angular/core';
import { UsersService } from '../../services';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css'],
})
export class AddAdminComponent {
  hide = true;
  @Input() type: string;
  
  constructor(private service: UsersService) {}

  public onSubmit(data): void {
    this.service.addUser(data, this.type).subscribe((res) => {
      console.log(res);
    });
  }
}
