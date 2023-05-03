import { Component } from '@angular/core';
import { HttpServiceService } from '../Services/http-service.service';
import { UserdataService } from '../Services/userdata.service';
import { CheckLateFeesService } from '../Services/check-late-fees.service';
import { User } from '../classes/user';
import {faChevronDown, faGear, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import {faUserCircle} from '@fortawesome/free-regular-svg-icons'
import { Router } from '@angular/router';
import { AuthService } from '../Services/authservice.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  // users: User[] = [];
  // // user1: User = new User("rrrr@gmail.com",3,"rania",123);
  headerType: String = 'login';
  name: string = 'Ahmed';
  faChevronDown = faChevronDown;
  faUserCircle = faUserCircle;
  faGear = faGear; 
  faArrowRightFromBracket = faArrowRightFromBracket;
  constructor(
    private httpService: HttpServiceService,
    private userDataService: UserdataService,
    private router: Router,
    private auth: AuthService,) {
     //this.name = 
    }


    ngOnInit(){
      this. router.events. subscribe ((val:any)=>{
        console.warn(val.url);
        if (val.url.includes('main')){
          this.headerType = 'main'
          this.name = this.userDataService.user.firstname;
        }
        else{
          this.headerType = 'login'
          this.name = 'Ahmed';
        }

      })
      
    }

   
    

 
  // ngOnInit() {
  //   this.getUserData();
  //   this.httpService.getAllUsers().subscribe((users) => {
  //     this.users = users;
  //     console.log(users);
  //     for (let user of this.users) {
  //       if (user !== null) {
  //         console.log(user.email);
  //         console.log(user.password);
  //       }
  //     }
  //     this.createUser();
  //   });
  //   // this.httpService.createUserWithId(this.user1,3);
  // }
  // createUser() {
  //   // this.httpService.createUserWithId(this.user1, 3).subscribe(
  //   //   (result) => {
  //   //     console.log(`User created successfully: ${result}`);
  //   //   },
  //   //   (error) => {
  //   //     console.log(`Error creating user: ${error}`);
  //   //   }
  //   // );
  // }
  // getUserData() {
  //   this.httpService.getUser(1).subscribe(
  //     (data: User) => {
  //       console.log(data);
  //       console.log(data.email);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  //   this.httpService.getUser(1).subscribe(
  //     (data: User) => {
  //       if (data != null) {
  //         console.log(data);
  //         console.log(data.email);
  //       } else {
  //         console.log('no user with this id');
  //       }
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
}
