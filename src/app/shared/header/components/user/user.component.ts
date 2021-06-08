import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Users } from 'src/app/pages/users/models';

import { routes } from '../../../../consts';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user: Users;
  @Output() signOut: EventEmitter<void> = new EventEmitter<void>();
  public routes: typeof routes = routes;
  public flatlogicEmail: string = "https://flatlogic.com";

  public signOutEmit(): void {
    this.signOut.emit();
  }
}
