import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
constructor(private service:UserService){
}
users:any;//hethi bech najmou nest3mlou e (d) 5atr feha data mais locallement ya3refha e d mich fi b9eyt el projet
Id:any;
  ngOnInit(): void {
    this.service.getUserList().subscribe(
      (data)=>{
        console.log(data);
      }
    );
  
  }
}
