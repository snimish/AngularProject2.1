import { Component, OnInit } from '@angular/core';
import { MarvelDataService } from 'app/marvel-data/marvel-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css']
})
export class CreatorsComponent implements OnInit {
  private isLoaded: boolean = false;
  private creators: any;
  private comicId: number;

  constructor(private marvelService: MarvelDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.comicId = +params['cid'] || 0;
      console.log(this.comicId);

      // if comicId is present then use it to fetch creators
      if (this.comicId != 0) {
        this.marvelService.getCreatorsByComicId(this.comicId).subscribe((res) => {
          this.creators = res.data.results;
          this.isLoaded = true;
          console.log(res);
        });
      }
      else {
        this.marvelService.getCreators().subscribe((res) => {
          this.creators = res.data.results;
          this.isLoaded = true;
          console.log(res);
        });
      }

    });

  }

}
