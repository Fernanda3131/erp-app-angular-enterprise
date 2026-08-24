import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../../core/services/auth.service';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
    constructor(
    private auth: Auth,
    private router: Router
  ) {}

  logout() {

    this.auth.logout();
    this.router.navigate(['/login']);

  }

}
