import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fireauth';
  isSignedIn = false
  constructor(public FirebaseService : FirebaseService){}
  ngOnInit(){
    if(localStorage.getItem('user')!==null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
  }

  async onSignin(email:string,password:string){
    await this.FirebaseService.signin(email,password)
    if(this.FirebaseService.isLoggedIn)
    this.isSignedIn = true
  }

  handleLogout(){
    this.isSignedIn=false
  }
}
