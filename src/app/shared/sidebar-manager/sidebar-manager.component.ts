import { Component } from '@angular/core';
import { routes } from '../../consts/routes';

@Component({
  selector: 'app-sidebar-manager',
  templateUrl: './sidebar-manager.component.html',
  styleUrls: ['./sidebar-manager.component.scss']
})
export class SidebarManagerComponent {
  public routes: typeof routes = routes;
  public isOpenUiElements = false;

  public openUiElements() {
    this.isOpenUiElements = !this.isOpenUiElements;
  }
}
