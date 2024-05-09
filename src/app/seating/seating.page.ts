import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonButton, IonApp, IonMenu, IonMenuButton, IonButtons, IonBackButton, IonList, IonItem, IonSelect, IonSelectOption} from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../Services/movie.service';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-seating',
  templateUrl: './seating.page.html',
  styleUrls: ['./seating.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonButton, IonApp, IonMenu, IonButtons, IonMenuButton, RouterLinkWithHref, IonBackButton, IonList, IonItem, IonSelect, IonSelectOption],
})
export class SeatingPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  handleChange(e:any) {
    console.log('ionChange fired with value: ' + e.detail.value);
  }

  handleCancel() {
    console.log('ionCancel fired');
  }

  handleDismiss() {
    console.log('ionDismiss fired');
  }
}

