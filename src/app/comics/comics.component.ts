import { Component, OnInit } from '@angular/core';
import { MarvelDataService } from 'app/marvel-data/marvel-data.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  private isLoaded: boolean = false;  
  private comics: any;
  constructor(private marvelService: MarvelDataService) { }

  ngOnInit() {
    this.marvelService.getComics().subscribe((res)=>{
      this.comics = res.data.results;
      this.isLoaded =true;
      //console.log(res.data.results);
    });
  }

}
