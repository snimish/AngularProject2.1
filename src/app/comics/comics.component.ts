import { Component, OnInit } from '@angular/core';
import { MarvelDataService } from 'app/marvel-data/marvel-data.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  private characters: any;
  constructor(private marvelService: MarvelDataService) { }

  ngOnInit() {
    this.marvelService.getCharacters().subscribe((res)=>{
      this.characters = res;
      //console.log(res.data.results);
    });
  }

}
