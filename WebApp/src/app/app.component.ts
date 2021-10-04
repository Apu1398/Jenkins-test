import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient){}
  ngOnInit(){
    const body = { "username":"cubero2112","password": "1234" };
    this.http.post<any>("http://localhost:8080/api/auth/signin", body).subscribe(data => console.log(data));
  }
  title = 'simple-web';
}
