import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {


  constructor(private apiService: ApiService) {
  }

  searchText: BehaviorSubject<string> = new BehaviorSubject<string>('');

  changeText(text: string) {
    this.searchText.next(text);

  }
  
  searchArtist(artist: string) {
    artist = artist.replace(' ', '%20');
    console.log('search?q=remaster%2520track%3A' + artist +'%2520artist%3A' + artist + '&type=album%2Cartist%2Ctrack%2Cplaylist');
    return this.apiService.get('search?q=remaster%2520track%3A' + artist +'%2520artist%3A' + artist + '&type=album%2Cartist%2Ctrack%2Cplaylist&limit=5&offset=0');
  }


}