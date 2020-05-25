import { OnInit, Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../all/library/validations/email-validator';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'login.component.html',
  styleUrls  : ['login.component.css'],
  providers  : [UserService]
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  accessDenied: boolean;
  isSending: any;
  accessDeniedText: string;
  session: {};
  icon: string[] = ['g-icon-user', 'g-icon-locked'];

  public isLogged: boolean;
  public submitted: boolean;

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) {
    this.submitted = false;
    this.accessDenied = false;
    this.isSending = null;
    this.isLogged = null;
    this.accessDeniedText = '';
  }

  reset() {
    this.email.setValue('');
    this.password.setValue('');
  }

  login() {
    this.submitted = true;
    if (!this.userForm.valid) { return; }

    const { email, password } = this.userForm.value;

    this.accessDenied = false;
    this.isSending = true;
    this.userService.login(email, password).subscribe(
      (result) => {
        if (result) {
          // Se usará cuando se implemente Aptitus Web
          // this.isLogged = true;
          this.router.navigate(['/empresas']);
          this.session = JSON.parse(localStorage.getItem('user'));
        }
      },
      (error) => {
        this.isSending = null;
        this.accessDenied = true;
        this.accessDeniedText = error.message || 'Error en la conexión, intentelo nuevamente.';
      }
    );
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      'email': ['', [
        Validators.required,
        emailValidator()
      ]],
      'password': ['', [Validators.required]]
    });
    this.email = this.userForm.get('email');
    this.password = this.userForm.get('password');
  }
}
