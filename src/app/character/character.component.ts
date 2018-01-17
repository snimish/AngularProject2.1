import { Component, OnInit } from '@angular/core';
import { MarvelDataService } from 'app/marvel-data/marvel-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  private isLoaded: boolean = false;
  private character: any;
  private id: number;

  constructor(private marvelService: MarvelDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // assign the route parameter to id
      this.id = +params['id']; // (+) converts string 'id' to a number

      // load the character data for given Id  by subscribing to marvel service
      this.marvelService.getCharacterById(this.id).subscribe((res) => {
        this.character = res.data.results;
        this.isLoaded = true;
        console.log(res);
      });

    });
  }

  loadComics(id:number){
    // navigete to comics page
    this.router.navigate(['/comics'], { queryParams: { cid: id } });
  }

}
