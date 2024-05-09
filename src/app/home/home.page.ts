import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonButton, IonApp, IonMenu, IonMenuButton, IonButtons} from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../Services/movie.service';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { Routes } from '@angular/router';
import { Share } from '@capacitor/share';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonButton, IonApp, IonMenu, IonButtons, IonMenuButton, RouterLinkWithHref],
})
export class HomePage implements OnInit{
  movies:any=[];
  constructor(private movieService:MovieService, private router:Router) 
  {
    
  }

  
  ngOnInit(): void
  {
    this.movieService.GetMovieData().subscribe(
      (data)=>{
        this.movies = data.Search;
      }
    );
  }

  //Traversal
  bookPage()
  {
    this.router.navigate(['/login'])
  }

  //Function for share plugin
  async shareMovie(movie:any)
  {
    await Share.share({
      title: movie.Title,
      text: movie.Year,
      url: movie.Poster,
    });
  }

}

