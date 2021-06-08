import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';

import { routes } from '../../../consts';

import jwt_decode from 'jwt-decode';
import { DToken } from '../models/d-token';

@Injectable()
export class ManagerGuard implements CanActivate {
  public routers: typeof routes = routes;

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = localStorage.getItem('token');
    const decoded: DToken = jwt_decode(token);

    if (decoded.authorities[0] == 'MANAGER') {
      return true;
    } else {
      this.router.navigate([this.routers.LOGIN]);
    }
  }
}
