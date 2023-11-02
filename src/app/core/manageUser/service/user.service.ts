import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { users } from 'src/app/model/users'; // import the User interface


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl="http://localhost:3000/users/"

  constructor(private http:HttpClient) { }
  getUserList():Observable<users[]>{
    return this.http.get<users[]>(this.baseUrl);
  }
  getUserById(id:any):Observable<users[]> { // add the missing colon
    return this.http.get<users[]>(this.baseUrl+id);
  }
  createUser(user:users):Observable<users> {
    return this.http.post<users>(this.baseUrl,user);
  }
  /*updateUser(user:Users):Observable<Users> {
    return this.http.put<Users>("http://localhost:3000/users/"+user.id,user);
  }*/
  deleteUser(id:any):Observable<users> {
    return this.http.delete<users>(this.baseUrl+id);
  }
}
