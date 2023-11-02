import { Component } from '@angular/core';
import { users } from 'src/app/model/users';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  constructor(private userService: UserService) {}

  user = new users();

  showForm(f: any) {
    console.log(f)
  }

  saveUser(u:users){
    //add user
    this.userService.createUser(u).subscribe(
      ()=>{
        alert('added');
      }
    );
    }
}
