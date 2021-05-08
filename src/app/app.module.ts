import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA8Oj_YcgC8FUCZuqiesSRRKNpuZmcAPMQ",
      authDomain: "angular-firebase-auth-cae5c.firebaseapp.com",
      projectId: "angular-firebase-auth-cae5c",
      storageBucket: "angular-firebase-auth-cae5c.appspot.com",
      messagingSenderId: "34521142787",
      appId: "1:34521142787:web:d4d5f49d33cfef1993e036"
    })
  ],
  providers: [ FirebaseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
