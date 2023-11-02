import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { users } from 'src/app/model/users';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
})
export class DetailUserComponent implements OnInit {
  id:any;
  user=new users;
  constructor(private activatedroute: ActivatedRoute, private service:UserService){

  }
  ngOnInit(): void {
    this.id=this.activatedroute.snapshot.params['id'];
    this.service.getUserById(this.id).subscribe(
      (data)=>{
        //this.user=data;
        console.log(data)
      }
    )
    /* console.log(this.id);
    console.log(this.activatedroute.snapshot.queryParams)
    this.activatedroute.params.subscribe(
      (d)=>{
        console.log(d);
      }*/
    
      
  }

}
