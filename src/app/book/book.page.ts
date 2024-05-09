import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonButton, IonApp, IonMenu, IonMenuButton, IonButtons, IonBackButton, IonSelect} from '@ionic/angular/standalone';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonButton, IonApp, IonMenu, IonButtons, IonMenuButton, RouterLinkWithHref, IonBackButton, IonSelect],
})
export class BookPage implements OnInit {

  getValue:any=[];
  largPop:number = 0;

  constructor(private router:Router) 
  { 

  }

  ngOnInit()
  {
  }

}
