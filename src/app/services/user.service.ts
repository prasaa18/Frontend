import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url=environment.apiUrl;

  constructor(private httpclient:HttpClient) { }

  signup(data:any){
    return this.httpclient.post(this.url
      +"/user/signup",data,{
        headers:new HttpHeaders().set('Content-Type','application/json')
      })
  }
  forgotPassword(data:any){
    return this.httpclient.post(this.url
      +"/user/forgotPassword",data,{
        headers:new HttpHeaders().set('Content-Type','application/json')
      })
  }
}
