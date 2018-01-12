import { Component, OnInit } from '@angular/core';
import { MarvelDataService } from 'app/marvel-data/marvel-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  private isLoaded: boolean = false;
  private characterId: number;
  private comics: any;
  constructor(private marvelService: MarvelDataService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.characterId = +params['cid'] || 0;
        console.log(this.characterId);
      });

    if (this.characterId != 0) {
      this.marvelService.getComicsByCharacterId(this.characterId).subscribe((res) => {
        this.comics = res.data.results;
        this.isLoaded = true;
      });
    }
    else {
      this.marvelService.getComics().subscribe((res) => {
        this.comics = res.data.results;
        this.isLoaded = true;
      });

      //console.log(res.data.results);
    }
  }

}
