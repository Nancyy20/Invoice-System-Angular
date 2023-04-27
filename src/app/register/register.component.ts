import { User } from './../user';
import { HttpServiceService } from './../Services/http-service.service';
import { UsersDataService } from './../Services/users-data.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/authservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user: User = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    nationalId: '',
  };
  constructor(
    private httpService: HttpServiceService,
    private router: Router,
    private authService: AuthService
  ) {}

  register(user: User) {
    this.httpService.createUserWithId(user, user.nationalId).subscribe(
      (result) => {
        console.log(`User created successfully: ${result}`);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log(`Error creating user: ${error}`);
      }
    );
  }
}
