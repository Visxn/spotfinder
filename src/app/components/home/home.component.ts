import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { FormsModule, NgModel } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SpotifyQueryResponse } from '../../domain/spotify-query-response';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, HttpClientModule, FormsModule],
  providers: [SpotifyService, ApiService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  searchText: string = '';
  spotifySearchResponse: SpotifyQueryResponse;
  isSearchInputExpanded = false;

  constructor(private spotifyService: SpotifyService) {
    this.spotifyService.searchText.pipe(debounceTime(200)).subscribe((data: any) => {
      if (this.searchText)
        this.searchArtist();
    });
  }

  setExpanded(expanded: boolean) {
    this.isSearchInputExpanded = expanded;
  }

  ngOnInit(): void {
  }

  nextValue() {
    this.spotifyService.changeText(this.searchText);
  }

  searchArtist() {
    console.log(this.searchText)
    this.spotifyService.searchArtist(this.searchText).subscribe((data: any) => {
      console.log(data);
      this.spotifySearchResponse = data;      
    });
  }


}
