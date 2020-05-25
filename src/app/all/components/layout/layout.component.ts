import { AfterViewChecked, Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  templateUrl: 'layout.component.html',
  styleUrls  : ['layout.component.css'],
  providers  : [UserService]
})
export class LayoutComponent implements AfterViewChecked {
  full_name: string;
  role: string;

  constructor(private userService: UserService, private router: Router) {
    let session;
    session = JSON.parse(localStorage.getItem('user'));
    this.full_name  = `${session.name} ${session.surname}`;
    this.role  = session.role || 'Administrador';
  };

  ngAfterViewChecked() {
    const isLoggedIn = this.userService.isLoggedIn();
    if (!isLoggedIn) {
      this.router.navigate(['/login'])
    }
    return isLoggedIn;
  }

}
