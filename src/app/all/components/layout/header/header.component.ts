import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';

@Component({
  selector   : 'comp-header',
  templateUrl: 'header.component.html',
  styleUrls  : ['header.component.css']
})
export class HeaderComponent {
  title: string;
  name: string;
  icon: string[] = ['g-icon-swap', 'g-icon-down_arrow', 'g-icon-logout'];

  // Menu
  menuDropDownItems: any[];

  constructor(private userService: UserService, private router: Router) {
    let session;
    session = JSON.parse(localStorage.getItem('user'));
    this.title = '';
    this.name  = session.firstName;

    this.menuDropDownItems = [
      // #0
      {
        functionToCall: 'viewProfile',
        element: {
          title: 'Muy pronto...',
          icon : 'g-icon-working',
          text : 'Perfil',
          disabled: true
        }

      },
      // #1
      {
        functionToCall: 'logout',
        divider: true,
        element: {
          title: '',
          icon : 'g-icon-logout',
          text : 'Cerrar Sesión',
        }
      }
    ];
  };

  logout() {
    this.userService.logout();
    this.router.navigate(['login']);
  }

  dropdownFunctionConnector(key: string) {
    switch (key) {
      case 'viewProfile':
        // this.router.navigate([id, 'membresias'], {relativeTo: this.route});
        break;
      case 'logout':
        this.userService.logout();
        this.router.navigate(['login']);
        break;
    }
  }
}
