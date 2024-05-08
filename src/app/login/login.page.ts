import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonButton, IonApp, IonMenu, IonMenuButton, IonButtons, IonBackButton} from '@ionic/angular/standalone';
import { RouterLinkWithHref } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonButton, IonApp, IonMenu, IonButtons, IonMenuButton, RouterLinkWithHref, IonBackButton, FormsModule],
})
export class LoginPage implements OnInit {
  signupUsers: any[] = [];
  signupObj: any = 
  {
    username: '', email: '', password: ''
  };
  loginObj: any = 
  {
    username: '', password: ''
  };

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() 
  {
    const localData = localStorage.getItem('signUpUsers');
    if(localData != null)
    {
      this.signupUsers = JSON.parse(localData);
    }
  }

  onSignUp()
  {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
    this.signupObj =
  {
    username: '', email: '', password: ''
  };
  }

  onLogin()
  {
    const isUserExist = this.signupUsers.find(m => m.username == this.loginObj.username && m.password == this.loginObj.password);
    if(isUserExist != undefined)
    {
      alert('An error occured logging in')
    }
    else
    {
      alert('User Logged in Successfully');
      this.bookPage();
    }
  }

  bookPage()
  {
    this.router.navigate(['/book'])
  }

}
