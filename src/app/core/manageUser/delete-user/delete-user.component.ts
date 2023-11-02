import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
})
export class DeleteUserComponent {
  constructor(private user:UserService,private Activatedroute:ActivatedRoute,private router:Router){
       
  }
  ngOnInit(){
    this.user.deleteUser(this.Activatedroute.snapshot.params['id']).subscribe(
      (success)=>{//this block is called next we use it in subscribe(success)
        this.router.navigate(['user']);
      },
      (err)=>{let status=err.status;//this block is called error we use it in subscribe
        switch(status){
          case 404:alert("User not found");
          break;
          case 500:alert("Internal Server Error");
          break;  
          default:alert("Error");
        }
        }
    )
  }

}
